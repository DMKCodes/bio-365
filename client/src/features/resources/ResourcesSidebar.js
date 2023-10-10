import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import { CATEGORIES } from '../../app/shared/RESOURCES';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ResourcesSidebar = ({ setCategory, sidebarCollapsed, setSidebarCollapsed }) => {
    return (
        <div className='resource-sidebar sticky-top'>
            <Button
                outline
                color='dark'
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
                <h5 className='pf fw-bold mt-5 mb-3'>External</h5>
                {CATEGORIES.map((category, index) => {
                    return (
                        <p 
                            className='resource-category'
                            key={index}
                            onClick={() => setCategory(category.name)}
                        >
                            <FontAwesomeIcon icon={category.icon} className='me-2' fixedWidth />
                            {category.name}
                        </p>
                    );
                })}
            </div>
        </div>
    );
};

export default ResourcesSidebar;