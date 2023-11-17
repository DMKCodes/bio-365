import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import {
    Container,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Collapse
} from 'reactstrap';
import { selectCurrentUser } from '../features/users/userSlice';
import RegisterLoginModal from '../features/users/RegisterLoginModal';
import UserDropdown from '../features/users/UserDropdown';
import logoFull from '../app/media/logo.png';
import logoBare from '../app/media/logo-bare.png';

const HomeNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const currentUser = useSelector(selectCurrentUser);

    return (
        <Container className='header p-4 pb-0 d-flex'>
            <NavLink className='nav-link' to='/'>
                <img 
                    src={logoFull} 
                    alt='Biodiversity365 logo' 
                    className='header-logo header-logo-full d-none d-md-block' 
                />
                <img
                    src={logoBare}
                    alt='Biodiversity365 logo'
                    className='header-logo header-logo-bare d-xs-block d-md-none'
                />
            </NavLink>
            <Navbar expand='sm' className='header-menu p-0 ms-auto mb-auto'>
                <NavbarToggler 
                    onClick={() => setMenuOpen(!menuOpen)} 
                    className='ms-auto border-light rounded-0'
                />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='fw-bold pe-2 pe-sm-0 pt-3 pt-sm-0' navbar>
                        {location.pathname !== '/' &&
                            <NavItem>
                                <NavLink className='nav-link nav-link-main text-light' to='/'>
                                    Home
                                </NavLink>
                            </NavItem>
                        }
                        <NavItem>
                            <NavLink className='nav-link nav-link-main text-light' to='/articles'>
                                Articles
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link nav-link-main text-light' to='/learn'>
                                Learn
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link nav-link-main text-light' to='/stories'>
                                Stories
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link nav-link-main text-light' to='/resources'>
                                Resources
                            </NavLink>
                        </NavItem>
                        <div>
                            {currentUser ? (
                                <UserDropdown />
                            ) : (
                                <RegisterLoginModal currentUser={currentUser} />
                            )}
                        </div>
                    </Nav>
                </Collapse>
            </Navbar>
        </Container>
    );
};

export default HomeNav;