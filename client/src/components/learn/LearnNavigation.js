import { Nav, NavItem, NavLink } from 'reactstrap';

const LearnNavigation = () => {
    return (
        <Nav className='navbar learn-navigation sticky-top mx-0 justify-content-around p-0'>
            <NavItem>
                <NavLink href='#important-section'>
                    WHY IS IT IMPORTANT?
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href='#globe-section'>
                    BIODIVERSITY AROUND THE WORLD
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href='#threats-section'>
                    THREATS TO BIODIVERSITY
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href='#conservation-section'>
                    CONSERVATION
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href='#listen-section'>
                    LISTEN & LEARN
                </NavLink>
            </NavItem>
        </Nav>
    );
};

export default LearnNavigation;