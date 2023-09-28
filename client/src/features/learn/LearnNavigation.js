import { Nav, NavItem, NavLink } from 'reactstrap';

const LearnNavigation = () => {
    return (
        <Nav className='navbar learn-navigation sticky-top mx-0 justify-content-around p-0 d-none d-md-flex'>
            <NavItem>
                <NavLink href='#important-section'>
                    WHY IS IT IMPORTANT?
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href='#globe-section'>
                    AROUND THE GLOBE
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href='#threats-section'>
                    UNDER THREAT
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href='#conservation-section'>
                    CONSERVATION STRATEGIES
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