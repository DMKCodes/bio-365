import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NewsPagination from './NewsPagination';
import ArticleCard from './ArticleCard';
import FeaturedArticle from './FeaturedArticle';

const NewsList = ({ articles, dashboard }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const pageSize = 16;

    if (!articles) {
        return <p>Loading...</p>;
    } else {
        return (
            <Container>
                <Row className='mt-5 mt-md-5'>
                    <NewsPagination 
                        pageSize={pageSize}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        articlesLength={articles.length}
                    />
                </Row>

                <Row>
                    {(!dashboard && window.innerWidth >= 800 ? (
                        articles.slice(currentPage * pageSize, (currentPage + 1) * pageSize).map((article, index) => {
                            if (index === 0) {
                                return (
                                    <FeaturedArticle
                                        article={article}
                                        key={index}
                                        dashboard={dashboard}
                                    />
                                );
                            } else {
                                return (
                                    <Col xs='12' md='6' lg='4' key={index} className='mb-0 mb-md-5'>
                                        <ArticleCard article={article} dashboard={dashboard} />
                                    </Col>
                                );
                            }
                        })
                    ) : (
                        articles.slice(currentPage * pageSize, (currentPage + 1) * pageSize).map((article, index) => {
                            return (
                                <Col xs='12' md='6' lg='4' key={index}>
                                    <ArticleCard article={article} dashboard={dashboard} />
                                </Col>
                            );
                        })
                    ))}
                </Row>

                <Row className='my-5'>
                    <NewsPagination 
                        pageSize={pageSize}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        articlesLength={articles.length}
                    />
                </Row>
            </Container>
        );
    }
};

export default NewsList;