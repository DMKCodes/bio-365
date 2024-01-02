import { NavLink } from 'react-router-dom';
import { useTheme } from '../../hooks/ThemeProvider';
import { Button, Nav, Navbar, NavItem } from 'reactstrap';
import { CATEGORIES } from '../../app/shared/RESOURCES';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ResourcesSidebar = ({ activeCategory, setActiveCategory, sidebarCollapsed, setSidebarCollapsed }) => {
    const { mode } = useTheme();

    return (
        <div className='resource-sidebar sticky-top'>
            <Button
                outline
                color={mode === 'dark' ? 'light' : 'dark'}
                className='resource-sidebar-collapse-btn btn-sm rounded-0 mt-4'
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            >
                <FontAwesomeIcon icon={sidebarCollapsed ? faChevronRight : faChevronLeft} />
            </Button>
            <div className={sidebarCollapsed ? 'd-none' : 'd-block'}>
                <h5 className='pf fw-bold mt-5 mb-3'>Internal</h5>
                <NavLink className='nav-link' to='/glossary'>
                    <p className='mb-2'>Glossary</p>
                </NavLink>
                <NavLink className='nav-link' to='/donations'>
                    <p className='mb-0'>Donate</p>
                </NavLink>

                <h5 className='pf fw-bold mt-5'>External</h5>
                <Navbar className='resource-category-nav'>
                    <Nav navbar className='ps-0'>
                        {CATEGORIES.map((category, index) => {
                            return (
                                <NavItem 
                                    key={index} 
                                    onClick={() => setActiveCategory(category.name)}
                                    className={`nav-link ${mode === 'dark' ? 'text-light' : 'text-dark'} ${category.name === activeCategory ? 'active' : ''}`}
                                >
                                    {category.icon &&
                                        <FontAwesomeIcon icon={category.icon} className='me-2' fixedWidth />
                                    }
                                    {category.name}
                                </NavItem>
                            );
                        })}
                    </Nav>
                </Navbar>
            </div>
        </div>
    );
};

export default ResourcesSidebar;