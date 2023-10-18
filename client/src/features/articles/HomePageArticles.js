import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useArticlesQuery } from './newsApiSlice';
import { Row, Col, Button } from 'reactstrap';
import FeaturedArticle from './FeaturedArticle';
import MicroArticle from './MicroArticle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HomePageArticles = () => {
    const [featuredArticle, setFeaturedArticle] = useState(null);
    const [microArticles, setMicroArticles] = useState(null);

    const {
        data,
        isError,
        isLoading
    } = useArticlesQuery();

    useEffect(() => {
        if (data) {
            const { articles } = data;

            const newsArticles = articles.filter((article) => article.category === 'News');
            const sortedArticles = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
            const featuredArticle = newsArticles.length > 0 ? newsArticles[0] : null;
            const microArticles = sortedArticles.filter((article) => article !== featuredArticle).slice(0, 3);

            setFeaturedArticle(featuredArticle);
            setMicroArticles(microArticles);
        }
    }, [data]);

    return (
        <Row className='d-flex justify-content-center'>
            <h2 className='pf text-center fw-bold mb-3'>In the News</h2>
            <p className='text-center'>The latest in biodiversity news and research, updated daily.</p>
            {isError ? (
                <h3 className='my-3 text-center'>Error retrieving articles. Please refresh and try again.</h3>
            ) : isLoading ? (
                <h3 className='my-3 text-center'>Gathering the latest articles...</h3>
            ) : featuredArticle && !microArticles ? (
                <Row className='d-flex justify-content-center'>
                    <FeaturedArticle article={featuredArticle} />
                </Row>
            ) : !featuredArticle && microArticles ? (
                <Row>
                    {microArticles.map((item, index) => {
                        return (
                            <MicroArticle article={item} index={index} />
                        );
                    })}
                    <Col md='3'>
                        <NavLink className='nav-link text-center' to='/donations'>
                            <Button color='success' className='all-articles-button rounded-0 mb-3'>
                                All Articles<FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                            </Button>
                        </NavLink>
                    </Col>
                </Row>
            ) : featuredArticle && microArticles ? (
                <Row>
                    <FeaturedArticle article={featuredArticle} />
                    {microArticles.map((item, index) => {
                        return (
                            <MicroArticle article={item} key={index} />
                        );
                    })}
                    <Col md='3' className='d-flex'>
                        <Button color='success' className='w-100 rounded-0'>
                            <NavLink className='nav-link' to='/articles'>
                                All Articles<FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                            </NavLink>
                        </Button>
                    </Col>
                </Row>
            ) : null}
        </Row>
    );
};

export default HomePageArticles;