import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../hooks/ThemeProvider';
import { 
    Container, 
    Row, 
    Col, 
    Form, 
    Input, 
    Pagination, 
    PaginationItem, 
    PaginationLink,
    Button
} from 'reactstrap';
import Header from '../components/Header';
import VideoBackground from '../components/VideoBackground';
import TopButton from '../components/TopButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { GLOSSARY_PAGE_VIDEO_BG } from '../app/shared/VIDEO_BACKGROUNDS';
import { formatGlossary } from '../app/shared/GLOSSARY';

const GlossaryPage = () => {
    const { mode } = useTheme();

    const [allItems, setAllItems] = useState([]);
    const [currentLetter, setCurrentLetter] = useState(null);

    const [searchQuery, setSearchQuery] = useState('');
    const [searchPerformed, setSearchPerformed] = useState(false);

    const [searchResults, setSearchResults] = useState(null);
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
        const glossary = formatGlossary();
        setAllItems(glossary);
    }, []);

    const populatePagination = () => {
        return Array.from(
            new Set(allItems.map(item => item.term[0].toUpperCase()))
        );
    };

    const handleLetterClick = (letter) => {
        setCurrentLetter(letter);
        setNoResults(false);
        setSearchPerformed(false);
        setSearchQuery('');
    };

    const handleSearchChange = (event) => {
        event.preventDefault();
        setSearchQuery(event.target.value);
    };
    
    const handleSearchSubmit = (event) => {
        setCurrentLetter(null);

        if ((event.type === 'click' || event.key === 'Enter') && searchQuery) {
            event.preventDefault();
            setSearchPerformed(true);

            // Filter out glossary items w/ no matching strings
            const filteredItems = allItems.filter((item) => 
                item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.source.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (!filteredItems[0]) {
                setNoResults(true);
            } else {
                setNoResults(false);
                setSearchResults(filteredItems);
            }
        }
    };

    const handleSearchReset = () => {
        setSearchPerformed(false);
        setNoResults(false);
        setSearchQuery('');
        setCurrentLetter(null);
    };

    return (
        <Container fluid className='p-0'>
            <VideoBackground video={GLOSSARY_PAGE_VIDEO_BG} />
            <Header />

            <Container className='my-5'>
                <Button color={mode === 'dark' ? 'light' : 'dark'} outline className='rounded-0 mb-3 me-auto'>
                    <NavLink className='nav-link' to='/resources'>
                        <FontAwesomeIcon icon={faArrowLeft} className='me-2' />Back to Resources
                    </NavLink>
                </Button>
                <Row className='d-flex justify-content-center'>
                    <Col lg='6' md='8' xs='10'>
                        <Form>
                            <div style={{ position: 'relative' }}>
                                <Input
                                    type='text'
                                    placeholder='Search...'
                                    value={searchQuery}
                                    className='searchbar rounded-0 border-dark'
                                    onChange={handleSearchChange}
                                    onKeyDown={handleSearchSubmit}
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
                
                <Row className='mt-3 d-flex justify-content-center'>
                    <Col lg='6' md='8' xs='10' className='d-flex justify-content-center'>
                        <Pagination className='pagination'>
                            <PaginationItem
                                active={!currentLetter && !searchPerformed}
                                className='me-3'
                            >
                                <PaginationLink
                                    onClick={() => {
                                        setCurrentLetter(null);
                                    }}
                                    className='rounded-0'
                                >
                                    All
                                </PaginationLink>
                            </PaginationItem>
                            {populatePagination().map((letter) => (
                                <PaginationItem 
                                    key={letter} 
                                    active={currentLetter === letter}
                                >
                                    <PaginationLink 
                                        onClick={() => {
                                            handleLetterClick(letter)
                                        }} 
                                        className='rounded-0'
                                    >
                                        {letter}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                        </Pagination>
                    </Col>
                </Row>

                <Row className='mb-5'>
                    {noResults ? (
                        <div className='text-center mt-5'>
                            <h3>No results found for <i>{searchQuery}</i>.</h3>
                        </div>
                    ) : searchPerformed ? (
                        searchResults.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h2 className='pf fw-bold'>{item.term}</h2>
                                    <p>{item.definition}</p>
                                    <p>- {item.source}</p>
                                </div>
                            );
                        })
                    ) : currentLetter ? (
                        allItems.filter((item) => item.term.charAt(0).toUpperCase() === currentLetter)
                            .map((item, index) => {
                                return (
                                    <div key={index} className='my-4'>
                                        <h2 className='pf fw-bold'>{item.term}</h2>
                                        <p>{item.definition}</p>
                                        <p>- {item.source}</p>
                                    </div>
                                );
                            }
                        )
                    ) : !currentLetter && !searchPerformed ? (
                        allItems.map((item, index) => {
                            return (
                                <div key={index} className='my-4'>
                                    <h2 className='pf fw-bold'>{item.term}</h2>
                                    <p>{item.definition}</p>
                                    <p>- {item.source}</p>
                                </div>
                            )
                        })
                    ) : null}
                </Row>

                <TopButton />
            </Container>
        </Container>
    );
};

export default GlossaryPage;