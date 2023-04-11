import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { 
    filterDisplayArticles, 
    searchDisplayArticles,
    resetDisplayArticles
} from '../../features/news/newsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { 
    Row,
    Col,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Form,
    Input
} from 'reactstrap';

const NewsFilter = () => {
    const [sourceDropdownOpen, setSourceDropdownOpen] = useState(false);
    const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchPerformed, setSearchPerformed] = useState(false);

    const dispatch = useDispatch();

    const handleFilterChange = (filterType, filterValue) => {
        dispatch(filterDisplayArticles({ filterType, filterValue }));
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    
    const handleSearchSubmit = (event) => {
        if (event.type === 'click' || event.key === 'Enter') {
            setSearchPerformed(true);
            event.preventDefault();
            dispatch(searchDisplayArticles(searchQuery));
        }
    };

    const handleSearchReset = () => {
        setSearchPerformed(false);
        setSearchQuery('');
        dispatch(resetDisplayArticles());
    };

    return (
        <Row className='mb-3'>
            <Col md='6' className='d-flex align-items-center'>
                <h5 className='mb-0'>Filter By: </h5>
                <Dropdown 
                    isOpen={categoryDropdownOpen} 
                    toggle={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                    className='mx-3'
                >
                    <DropdownToggle caret color='success'>
                        Category
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem
                            onClick={() => handleFilterChange('category', null)}
                        >
                            All Categories
                        </DropdownItem>
                        <DropdownItem 
                            onClick={() => handleFilterChange('category', 'News')}
                        >
                            News
                        </DropdownItem>
                        <DropdownItem 
                            onClick={() => handleFilterChange('category', 'Research')}
                        >
                            Research
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown 
                    isOpen={sourceDropdownOpen} 
                    toggle={() => setSourceDropdownOpen(!sourceDropdownOpen)}
                >
                    <DropdownToggle caret color='success'>
                        Source
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem
                            onClick={() => handleFilterChange('publisher', null)}
                        >
                            All Publishers
                        </DropdownItem>
                        <DropdownItem 
                            onClick={() => handleFilterChange('publisher', 'Conservation International')}
                        >
                            Conservation International
                        </DropdownItem>
                        <DropdownItem 
                            onClick={() => handleFilterChange('publisher', 'Down To Earth')}
                        >
                            Down To Earth
                        </DropdownItem>
                        <DropdownItem
                            onClick={() => handleFilterChange('publisher', 'Frontiers in Conservation Science')}
                        >
                            Frontiers in Conservation Science
                        </DropdownItem>
                        <DropdownItem
                            onClick={() => handleFilterChange('publisher', 'Mongabay')}
                        >
                            Mongabay
                        </DropdownItem>
                        <DropdownItem
                            onClick={() => handleFilterChange('publisher', 'PLOS ONE Biodiversity')}
                        >
                            PLOS ONE Biodiversity
                        </DropdownItem>
                        <DropdownItem
                            onClick={() => handleFilterChange('publisher', 'ScienceDaily')}
                        >
                            ScienceDaily
                        </DropdownItem>
                        <DropdownItem
                            onClick={() => handleFilterChange('publisher', 'The Conversation')}
                        >
                            The Conversation
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </Col>
            <Col md='6'>
                <Form>
                    <div style={{ position: 'relative' }}>
                        <Input
                            type='text'
                            placeholder='Search...'
                            value={searchQuery}
                            onChange={handleSearchChange}
                            onKeyPress={handleSearchSubmit}
                            className='searchbar'
                        />
                        <span 
                            className='searchbar-icons'
                            onClick={searchPerformed ? handleSearchReset : handleSearchSubmit}
                        >
                            {searchPerformed ? (
                                <FontAwesomeIcon icon={faTimes} />
                            ) : (
                                <FontAwesomeIcon icon={faSearch} />
                            )}
                        </span>
                    </div>
                </Form>
            </Col>
        </Row>
    );
};

export default NewsFilter;