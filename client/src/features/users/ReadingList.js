import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useGetArticlesQuery } from '../../features/users/articlesApiSlice';
import { Container, Row, Col, Button } from 'reactstrap';
import ArticleList from '../articles/ArticleList';
import ReadingListFilter from './ReadingListFilter';
import removeHtmlTags from '../../utils/removeHtmlTags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ReadingList = ({ currentUser }) => {
    const { _id } = currentUser;

    const {
        data,
        isError,
        error,
        isLoading
    } = useGetArticlesQuery(_id);

    const [displayArticles, setDisplayArticles] = useState([]);
    const [filterError, setFilterError] = useState(null);

    useEffect(() => {
        if (data) {
            const articlesWithHtmlRemoved = data.articles.map((article) => ({
                ...article,
                title: removeHtmlTags(article.title),
                snippet: removeHtmlTags(article.snippet)
            }));
    
            setDisplayArticles(articlesWithHtmlRemoved);
        };
    }, [data]);

    return (
        <Container className='px-0'>
            <Row className='mt-5 text-center'>
                {data &&
                    <Col md='4' className='ms-auto'>
                        <ReadingListFilter
                            allArticles={data.articles}
                            setDisplayArticles={setDisplayArticles}
                            setFilterError={setFilterError}
                        />
                    </Col>
                }
                {filterError &&
                    <div className='mt-5'>{filterError}</div>
                }
            </Row>
            <Row>
                {isLoading ? (
                    <div className='text-center mt-3'>
                        <p>Getting your reading list...</p>
                    </div>
                ) : isError ? (
                    <div className='text-center mt-3'>
                        <p>{error.data.error}</p>
                        <Button color='success' className='rounded-0 mb-3 me-auto'>
                            <NavLink className='nav-link' to='/'>
                                <FontAwesomeIcon icon={faArrowLeft} className='me-2' />Return Home
                            </NavLink>
                        </Button>
                    </div>
                ) : data ? (
                    <ArticleList articles={displayArticles} dashboard={true} />
                ) : !currentUser ? (
                    <div className='text-center mt-3'>
                        <p>Please log in to view your reading list.</p>
                    </div>
                ) :
                    <div className='text-center mt-3'>
                        <p>An unspecified error occurred.  Please try again later.</p>
                        <Button color='success' className='rounded-0 mb-3 me-auto'>
                            <NavLink className='nav-link' to='/'>
                                <FontAwesomeIcon icon={faArrowLeft} className='me-2' />Return Home
                            </NavLink>
                        </Button>
                    </div>
                }
            </Row>
        </Container>
    )
};

export default ReadingList;