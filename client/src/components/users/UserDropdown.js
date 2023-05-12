import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { selectCurrentUser, clearCurrentUser, checkAdmin } from '../../features/users/userSlice';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem
} from 'reactstrap';

const UserDropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const currentUser = useSelector(selectCurrentUser);
    const isAdmin = useSelector(checkAdmin);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        navigate('/');
        dispatch(clearCurrentUser());
    };

    return (
        <div>
            <Dropdown 
                isOpen={dropdownOpen} 
                toggle={() => setDropdownOpen(!dropdownOpen)}
                group
            >   
                <DropdownToggle 
                    caret
                    color='success' 
                    className='rounded-0'
                >
                    {currentUser.username}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>
                        <NavLink 
                            className='nav-link' 
                            to='/dashboard' 
                            style={{ color: 'black' }}
                        >
                            User Dashboard
                        </NavLink>
                    </DropdownItem>
                    { currentUser && isAdmin &&
                        <DropdownItem>
                            <NavLink 
                                className='nav-link' 
                                to='/admin' 
                                style={{ color: 'black' }}
                            >
                                Admin Dashboard
                            </NavLink>
                        </DropdownItem>
                    }
                    <DropdownItem>
                        <NavItem onClick={() => logout()}>
                            Logout
                        </NavItem>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default UserDropdown;