import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Input, Button } from 'reactstrap';
import { CATEGORIES } from '../../app/shared/RESOURCES';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSearch, 
    faTimes, 
    faChevronLeft, 
    faChevronRight 
} from '@fortawesome/free-solid-svg-icons';

const ResourcesSidebar = (props) => {
    const { 
        searchQuery, 
        setSearchQuery, 
        searchPerformed, 
        setSearchPerformed, 
        setCategory,
        sidebarCollapsed,
        setSidebarCollapsed
    } = props;

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    
    const handleSearchSubmit = (event) => {
        if (event.type === 'click' || event.key === 'Enter') {
            setSearchPerformed(true);
            event.preventDefault();
        }
    };

    const handleSearchReset = () => {
        setSearchPerformed(false);
        setSearchQuery('');
    };

    return (
        <div className='resource-sidebar sticky-top'>
            <Button
                outline
                color='dark'
                className='resource-sidebar-collapse-btn btn-sm rounded-0 mb-4 mt-4'
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            >
                <FontAwesomeIcon icon={sidebarCollapsed ? faChevronRight : faChevronLeft} />
            </Button>
            <div className={sidebarCollapsed ? 'd-none' : 'd-block'}>
                <p className='resource-sidebar-header fw-bold mb-2'>Internal Resources</p>
                <NavLink className='nav-link' to='/glossary'>
                    Glossary
                </NavLink>
                <p className='resource-sidebar-header fw-bold mt-4 mb-2'>External Resources</p>
                <div className='resource-search position-relative'>
                    <Input
                        type='text'
                        placeholder='Search...'
                        value={searchQuery}
                        onChange={handleSearchChange}
                        onKeyPress={handleSearchSubmit}
                        className='searchbar rounded-0 border-dark px-2'
                    />
                    <span 
                        className='resource-searchbar-icons'
                        onClick={searchPerformed ? handleSearchReset : handleSearchSubmit}
                    >
                        {searchPerformed ? (
                            <FontAwesomeIcon icon={faTimes} />
                        ) : (
                            <FontAwesomeIcon icon={faSearch} />
                        )}
                    </span>
                </div>
                <p className='resource-sidebar-header fw-bold mt-4 mb-2'>Categories</p>
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