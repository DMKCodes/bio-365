import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
    Navbar, 
    NavbarToggler, 
    Nav, 
    NavItem, 
    Collapse 
} from 'reactstrap';
import RegisterLoginModal from './RegisterLoginModal';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='success' sticky='top' expand='md'>
            <NavLink className='nav-link ms-md-5' to='/' style={{ color: 'white' }}>
                <h3 className='mt-1'>EcoUPDATE</h3>
            </NavLink>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            Policy
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            News
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link me-3' to='/'>
                            Data
                        </NavLink>
                    </NavItem>
                </Nav>
                <RegisterLoginModal />
            </Collapse>
        </Navbar>
    );
};

export default Header;