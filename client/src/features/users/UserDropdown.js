import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { selectCurrentUser, clearCurrentUser, checkAdmin } from '../../features/users/userSlice';
import usePersist from '../../hooks/usePersist';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem
} from 'reactstrap';

const UserDropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [, setPersist] = usePersist();

    const currentUser = useSelector(selectCurrentUser);
    const isAdmin = useSelector(checkAdmin);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(clearCurrentUser());
        setPersist(false);
        navigate('/');
    };

    const location = useLocation();

    return (
        <div>
            <Dropdown 
                isOpen={dropdownOpen} 
                toggle={() => setDropdownOpen(!dropdownOpen)}
                group
            >   
                <DropdownToggle 
                    caret
                    color={`${location.pathname === '/' ? 'light' : 'success'}`} 
                    className='rounded-0'
                >
                    {currentUser.username}
                </DropdownToggle>
                <DropdownMenu className='rounded-0 mt-1'>
                    <DropdownItem>
                        <NavLink 
                            className='nav-link' 
                            to='/dashboard'
                        >
                            User Dashboard
                        </NavLink>
                    </DropdownItem>
                    { currentUser && isAdmin &&
                        <DropdownItem>
                            <NavLink 
                                className='nav-link' 
                                to='/admin' 
                            >
                                Admin Dashboard
                            </NavLink>
                        </DropdownItem>
                    }
                    <DropdownItem>
                        <NavLink 
                            className='nav-link' 
                            to='/readinglist' 
                        >
                            Reading List
                        </NavLink>
                    </DropdownItem>
                    <hr className='my-2'/>
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