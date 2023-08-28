import { useState, useEffect } from 'react';
import { 
    Container, 
    Row, 
    Col, 
    Form, 
    Input, 
    Pagination, 
    PaginationItem, 
    PaginationLink 
} from 'reactstrap';
import Header from '../components/Header';
import VideoBackground from '../components/VideoBackground';
import { GLOSSARY_PAGE_VIDEO_BG } from '../app/shared/VIDEO_BACKGROUNDS';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { GLOSSARY } from '../app/shared/GLOSSARY';

const GlossaryPage = () => {
    const [items, setItems] = useState([]);
    const [currentLetter, setCurrentLetter] = useState(null);

    const [searchQuery, setSearchQuery] = useState('');
    const [searchPerformed, setSearchPerformed] = useState(false);

    const [searchResults, setSearchResults] = useState(null);
    const [noResults, setNoResults] = useState(false);

    const organizeTerms = (terms) => {
        // Filter out duplicates
        const filteredItems = terms.filter((item, index, self) =>
            index === self.findIndex((t) => (
                t.term.slice(0, 6) === item.term.slice(0, 6)
            ))
        );
   
        // Sort alphabetically
        const sortedItems = filteredItems.sort((a, b) => a.term.localeCompare(b.term));

        return sortedItems;
    };

    useEffect(() => {
        const organizedGlossary = organizeTerms(GLOSSARY);

        // Group items by the first letter
        const groupedItems = organizedGlossary.reduce((grouped, item) => {
            const letter = item.term.charAt(0).toUpperCase();

            if (!grouped[letter]) {
                grouped[letter] = [];
            }

            grouped[letter].push(item);
            return grouped;
        }, {});

        setItems(groupedItems);
        setCurrentLetter(Object.keys(groupedItems)[0]);
    }, []);

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
        if ((event.type === 'click' || event.key === 'Enter') && searchQuery) {
            event.preventDefault();
            setSearchPerformed(true);

            // Filter out glossary items w/ no matching strings
            const filteredItems = GLOSSARY.filter((item) => 
                item.term.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (!filteredItems[0]) {
                setNoResults(true);
                return;
            } else {
                setNoResults(false);
                const organizedItems = organizeTerms(filteredItems);
                setSearchResults(organizedItems);
            }
        }
    };

    const handleSearchReset = () => {
        setSearchPerformed(false);
        setNoResults(false);
        setSearchQuery('');
        setCurrentLetter('A');
    };

    return (
        <Container fluid className='p-0'>
            <VideoBackground video={GLOSSARY_PAGE_VIDEO_BG} />
            <Header />

            <Container className='my-5'>
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
                            {Object.keys(items).map((letter) => (
                                <PaginationItem 
                                    key={letter} 
                                    active={currentLetter === letter}
                                >
                                    <PaginationLink 
                                        onClick={() => handleLetterClick(letter)} 
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
                        <div className='text-center'>
                            <h5>No results...</h5>
                        </div>
                    ) : searchPerformed ? (
                        searchResults.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h2>{item.term}</h2>
                                    <p className='mb-0'>{item.definition}</p>
                                    <p>- {item.source}</p>
                                </div>
                            );
                        })
                    ) : items[currentLetter] ? (
                        items[currentLetter].map((item, index) => {
                            return (
                                <div key={index} className='my-3'>
                                    <h2>{item.term}</h2>
                                    <p className='mb-2'>{item.definition}</p>
                                    <p>- {item.source}</p>
                                </div>
                            );
                        })
                    ) : null}
                </Row>
            </Container>
        </Container>
    );
};

export default GlossaryPage;