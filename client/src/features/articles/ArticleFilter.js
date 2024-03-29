import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { 
    filterDisplayArticles, 
    searchDisplayArticles,
    resetDisplayArticles
} from './newsSlice';
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

const ArticleFilter = () => {
    const dispatch = useDispatch();
    
    const [sourceDropdownOpen, setSourceDropdownOpen] = useState(false);
    const [source, setSource] = useState('Publisher');

    const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
    const [category, setCategory] = useState('Category');

    const [searchQuery, setSearchQuery] = useState('');
    const [searchPerformed, setSearchPerformed] = useState(false);

    const handleFilterChange = (filterType, filterValue) => {
        if (filterType === 'publisher') {
            setSource(filterValue);
        } else if (filterType === 'category') {
            setCategory(filterValue);
        }

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
        <Row className='mb-md-3 news-filter p-0'>
            <Col md='6' className='p-0 mb-3 mb-md-0'>
                <Form className='mx-4 mx-md-0'>
                    <div className='news-search'>
                        <Input
                            type='text'
                            placeholder='Search...'
                            value={searchQuery}
                            onChange={handleSearchChange}
                            onKeyPress={handleSearchSubmit}
                            className='searchbar rounded-0 border-dark'
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
            <Col xs='12' md='6' className='d-flex justify-content-center justify-content-md-end text-md-start'>
                <Dropdown 
                    isOpen={categoryDropdownOpen} 
                    toggle={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                    className='me-3'
                >
                    <DropdownToggle 
                        caret 
                        color='success' 
                        className='rounded-0'
                    >
                        {category}
                    </DropdownToggle>
                    <DropdownMenu className='rounded-0'>
                        <DropdownItem
                            onClick={() => handleFilterChange('category', 'Category')}
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
                    <DropdownToggle 
                        caret 
                        color='success' 
                        className='rounded-0'
                    >
                        {source}
                    </DropdownToggle>
                    <DropdownMenu className='rounded-0'>
                        <DropdownItem
                            onClick={() => handleFilterChange('publisher', 'Publisher')}
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
                            onClick={() => handleFilterChange('publisher', 'Frontiers')}
                        >
                            Frontiers
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
        </Row>
    );
};

export default ArticleFilter;