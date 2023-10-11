import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setAllArticles,
    clearAllArticles,
    setDisplayArticles,
    selectDisplayArticles
} from '../features/articles/newsSlice';
import { useArticlesQuery } from '../features/articles/newsApiSlice';
import { Container, Row } from 'reactstrap';
import ArticleList from '../features/articles/ArticleList';
import ArticleFilter from '../features/articles/ArticleFilter';
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import { ARTICLES_PAGE_VIDEO_BG } from '../app/shared/VIDEO_BACKGROUNDS';

const ArticlesPage = () => {
    const dispatch = useDispatch();
    const displayArticles = useSelector(selectDisplayArticles);

    const {
        data,
        isError,
        isLoading
    } = useArticlesQuery();

    useEffect(() => {
        if (data) {
            dispatch(clearAllArticles());
            dispatch(setAllArticles(data.articles));
            dispatch(setDisplayArticles(data.articles));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <Container fluid className='p-0'>
            <VideoBackground video={ARTICLES_PAGE_VIDEO_BG} />
            <Header />

            <Container className='my-5'>
                <ArticleFilter />
                <Row>
                    {isError ? (
                        <h3 className='mt-5 text-center'>Error retrieving articles. Please refresh and try again.</h3>
                    ) : isLoading ? (
                        <h3 className='mt-5 text-center'>Fetching the latest articles...</h3>
                    ) : displayArticles ? (
                        <ArticleList
                            articles={displayArticles}
                            dashboard={false}
                        />
                    ) : null}
                </Row>
            </Container>
        </Container>
    );
};

export default ArticlesPage;