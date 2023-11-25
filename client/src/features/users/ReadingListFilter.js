import { useState } from 'react';
import { Form, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const ReadingListFilter = ({ allArticles, setDisplayArticles, setFilterError }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchPerformed, setSearchPerformed] = useState(false);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    
    const handleSearchSubmit = (event) => {
        if (event.type === 'click' || event.key === 'Enter') {
            setSearchPerformed(true);
            event.preventDefault();

            const filteredArticles = allArticles.filter((article) => 
                article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.publisher.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.snippet.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (filteredArticles.length > 0) {
                setDisplayArticles(filteredArticles);
            } else {
                setFilterError(`No results found for ${searchQuery}.`);
                setDisplayArticles([]);
            }
        };
    };

    const handleSearchReset = () => {
        setSearchPerformed(false);
        setFilterError(null);
        setSearchQuery('');
        setDisplayArticles(allArticles);
    };

    return (
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
    );

};

export default ReadingListFilter;