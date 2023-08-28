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
import logo from '../app/media/logo.png';

const HomeNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const currentUser = useSelector(selectCurrentUser);

    return (
        <Container className='home-nav p-4'>
            <Navbar expand='md' className='p-0'>
                <div>
                    <NavLink className='nav-link' to='/'>
                        <img 
                            src={logo} 
                            alt='Biodiversity365 logo' 
                            className='home-logo' 
                        />
                    </NavLink>
                </div>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='ms-auto p-0' navbar>
                        <NavItem>
                            <NavLink className='home-nav-link' to='/news'>
                                News & Research
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='home-nav-link' to='/learn'>
                                Learn
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='home-nav-link' to='/stories'>
                                Stories
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='home-nav-link' to='/resources'>
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

export default HomeNav;