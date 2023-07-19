import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Input, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { GLOSSARY } from '../app/shared/GLOSSARY';

const GlossaryPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchPerformed, setSearchPerformed] = useState(false);

    const [items, setItems] = useState([]);
    const [currentLetter, setCurrentLetter] = useState(null);

    useEffect(() => {
        const filteredItems = GLOSSARY.filter((item, index, self) =>
            index === self.findIndex((t) => (
                t.term.slice(0, 6) === item.term.slice(0, 6)
            ))
        );
        // Sort items alphabetically
        const sortedItems = filteredItems.sort((a, b) => a.term.localeCompare(b.term));

        // Group items by the first letter
        const groupedItems = sortedItems.reduce((grouped, item) => {
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
    };

    return (
        <Container>
            <Row>
                <h3 className='text-center mb-4'>Glossary</h3>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col lg='6' md='8' xs='10'>
                    <Form>
                        <div style={{ position: 'relative' }}>
                            <Input
                                type='text'
                                placeholder='Search...'
                                className='searchbar rounded-0 border-dark'
                            />
                            <span 
                                className='searchbar-icons'
                            >
                                {/* {searchPerformed ? (
                                    <FontAwesomeIcon icon={faTimes} />
                                ) : (
                                    <FontAwesomeIcon icon={faSearch} />
                                )} */}
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
                <div>
                    {items[currentLetter]?.map((item, index) => (
                        <div key={index}>
                            <h2>{item.term}</h2>
                            <p>{item.definition}</p>
                            <p>- {item.source}</p>
                        </div>
                    ))}
                </div>
            </Row>
        </Container>
    );
};

export default GlossaryPage;