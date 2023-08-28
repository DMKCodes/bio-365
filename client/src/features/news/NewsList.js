import { useState } from 'react';
import { Pagination, PaginationItem, PaginationLink, Container, Row, Col } from 'reactstrap';
import ArticleCard from './ArticleCard';
import FeaturedArticle from './FeaturedArticle';

const NewsList = ({ articles, dashboard }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const pageSize = 16;
    const pagesCount = Math.ceil(articles.length / pageSize);
    const pagesToShow = 5;
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
                <Row>
                    <div className='d-flex justify-content-end'>
                        <Pagination size='sm' aria-label='pagination' className='pagination mt-5'>
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
                    {(!dashboard ? (
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
                                    <Col lg='4' md='6' key={index} className='mb-5'>
                                        <ArticleCard article={article} dashboard={dashboard} />
                                    </Col>
                                );
                            }
                        })
                    ) : (
                        articles.slice(currentPage * pageSize, (currentPage + 1) * pageSize).map((article, index) => {
                            return (
                                <Col lg='4' md='6' key={index}>
                                    <ArticleCard article={article} dashboard={dashboard} />
                                </Col>
                            );
                        })
                    ))}
                    <div className='d-flex justify-content-end mb-5'>
                        <Pagination size='sm' aria-label='pagination' className='pagination'>
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