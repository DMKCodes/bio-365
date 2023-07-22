import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/users/userSlice';
import { NavLink } from 'react-router-dom';
import {
    Container,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Collapse
} from 'reactstrap';
import RegisterLoginModal from '../features/users/RegisterLoginModal';
import UserDropdown from '../features/users/UserDropdown';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const currentUser = useSelector(selectCurrentUser);

    return (
        <Container className='header px-0 mb-5 border-bottom border-5 border-dark'>
            <Navbar sticky='top' expand='md'>
                <div className='d-flex flex-row'>
                    <NavLink className='nav-link' to='/'>
                        <h2 className='logo me-1'>
                            Bio<span className='text-success'>diversity</span>365
                        </h2>
                    </NavLink>
                    <p>[BETA]</p>
                </div>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='ms-auto' navbar>
                        <NavItem>
                            <NavLink className='nav-link' to='/news'>
                                News
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/learn'>
                                Learn
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/stories'>
                                Stories
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link me-3' to='/resources'>
                                Resources
                            </NavLink>
                        </NavItem>
                    </Nav>
                    {currentUser ? (
                        <UserDropdown />
                    ) : (
                        <RegisterLoginModal currentUser={currentUser} />
                    )}
                </Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;