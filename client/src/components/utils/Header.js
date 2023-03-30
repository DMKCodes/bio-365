import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Container,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Collapse
} from 'reactstrap';
import RegisterLoginModal from '../users/RegisterLoginModal';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Container className='px-0'>
            <Navbar sticky='top' expand='md'>
                <NavLink className='nav-link' to='/'>
                    <h2>Biodiversity 365</h2>
                </NavLink>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='ms-auto' navbar>
                        <NavItem>
                            <NavLink className='nav-link' to='/policy'>
                                Policy
                            </NavLink>
                        </NavItem>
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
                            <NavLink className='nav-link' to='/resources'>
                                Resources
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link me-3' to='/about'>
                                About
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <RegisterLoginModal />
                </Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;