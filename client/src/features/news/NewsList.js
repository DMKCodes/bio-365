import { useState } from 'react';
import { Pagination, PaginationItem, PaginationLink, Container, Row, Col } from 'reactstrap';
import ArticleCard from './ArticleCard';
import FeaturedArticle from './FeaturedArticle';

const NewsList = ({ articles, dashboard }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const pageSize = 16;
    const pagesCount = Math.ceil(articles.length / pageSize);
    const pagesToShow = 3;
    const pagesOffset = Math.max(0, Math.min(pagesCount - pagesToShow, currentPage - Math.floor(pagesToShow / 2)));

    const handleClick = (e, index) => {
        e.preventDefault();
        setCurrentPage(index);
    }

    if (!articles) {
        return <p>Loading...</p>;
    } else {
        return (
            <Container>
                <Row className='my-4 my-md-5'>
                    <div className='d-flex justify-content-center justify-content-md-end'>
                        <Pagination size='sm' aria-label='pagination' className='pagination p-0'>
                            <PaginationItem disabled={currentPage <= 0}>
                                <PaginationLink
                                    first
                                    href='#'
                                    className='rounded-0 text-center'
                                    onClick={e => handleClick(e, 0)}
                                />
                            </PaginationItem>
                            <PaginationItem disabled={currentPage <= 0}>
                                <PaginationLink
                                    href='#'
                                    previous
                                    className='rounded-0 text-center'
                                    onClick={e => handleClick(e, currentPage - 1)}
                                />
                            </PaginationItem>
                            {[...Array(Math.min(pagesToShow, pagesCount))].map((page, i) => 
                                <PaginationItem active={i + pagesOffset === currentPage} key={i}>
                                    <PaginationLink 
                                        href='#'
                                        className='rounded-0 text-center'
                                        onClick={e => handleClick(e, i + pagesOffset)} 
                                    >
                                        {i + pagesOffset + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            )}
                            {pagesCount > pagesOffset + pagesToShow + 1 && 
                                <PaginationItem>
                                    <PaginationLink>...</PaginationLink>
                                </PaginationItem>
                            }
                            {pagesCount > pagesOffset + pagesToShow && 
                                <PaginationItem>
                                    <PaginationLink 
                                        href='#'
                                        className='rounded-0 text-center'
                                        onClick={e => handleClick(e, pagesCount - 1)}
                                    >
                                        {pagesCount}
                                    </PaginationLink>
                                </PaginationItem>
                            }
                            <PaginationItem disabled={currentPage >= pagesCount - 1}>
                                <PaginationLink
                                    href='#'
                                    next
                                    className='rounded-0 text-center'
                                    onClick={e => handleClick(e, currentPage + 1)}
                                />
                            </PaginationItem>
                            <PaginationItem disabled={currentPage >= pagesCount - 1}>
                                <PaginationLink
                                    href='#'
                                    last
                                    className='rounded-0 text-center'
                                    onClick={e => handleClick(e, pagesCount - 1)}
                                />
                            </PaginationItem>
                        </Pagination>
                    </div>
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
                    <div className='d-flex justify-content-center justify-content-md-end'>
                        <Pagination size='sm' aria-label='pagination' className='pagination p-0'>
                            <PaginationItem disabled={currentPage <= 0}>
                                <PaginationLink
                                    first
                                    href='#'
                                    className='rounded-0 text-center'
                                    onClick={e => handleClick(e, 0)}
                                />
                            </PaginationItem>
                            <PaginationItem disabled={currentPage <= 0}>
                                <PaginationLink
                                    href='#'
                                    previous
                                    className='rounded-0 text-center'
                                    onClick={e => handleClick(e, currentPage - 1)}
                                />
                            </PaginationItem>
                            {[...Array(Math.min(pagesToShow, pagesCount))].map((page, i) => 
                                <PaginationItem active={i + pagesOffset === currentPage} key={i}>
                                    <PaginationLink 
                                        href='#'
                                        className='rounded-0 text-center'
                                        onClick={e => handleClick(e, i + pagesOffset)} 
                                    >
                                        {i + pagesOffset + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            )}
                            {pagesCount > pagesOffset + pagesToShow + 1 && 
                                <PaginationItem>
                                    <PaginationLink>...</PaginationLink>
                                </PaginationItem>
                            }
                            {pagesCount > pagesOffset + pagesToShow && 
                                <PaginationItem>
                                    <PaginationLink 
                                        href='#'
                                        className='rounded-0 text-center'
                                        onClick={e => handleClick(e, pagesCount - 1)}
                                    >
                                        {pagesCount}
                                    </PaginationLink>
                                </PaginationItem>
                            }
                            <PaginationItem disabled={currentPage >= pagesCount - 1}>
                                <PaginationLink
                                    href='#'
                                    next
                                    className='rounded-0 text-center'
                                    onClick={e => handleClick(e, currentPage + 1)}
                                />
                            </PaginationItem>
                            <PaginationItem disabled={currentPage >= pagesCount - 1}>
                                <PaginationLink
                                    href='#'
                                    last
                                    className='rounded-0 text-center'
                                    onClick={e => handleClick(e, pagesCount - 1)}
                                />
                            </PaginationItem>
                        </Pagination>
                    </div>
                </Row>
            </Container>
        );
    }
};

export default NewsList;