import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    setAllArticles, 
    clearAllArticles, 
    setDisplayArticles,
    selectDisplayArticles
} from '../features/news/newsSlice';
import { useArticlesQuery } from '../features/news/newsApiSlice';
import { Container, Row } from 'reactstrap';
import NewsList from '../features/news/NewsList';
import NewsFilter from '../features/news/NewsFilter';
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import { NEWS_PAGE_VIDEO_BG } from '../app/shared/VIDEO_BACKGROUNDS';


const NewsPage = () => {
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
            <VideoBackground video={NEWS_PAGE_VIDEO_BG} />
            <Header />

            <Container className='my-5'>
                <NewsFilter />
                <Row>
                    {isError ? (
                        <h3 className='mt-5 text-center'>Error retrieving articles. Please refresh and try again.</h3>
                    ) : isLoading ? (
                        <h3 className='mt-5 text-center'>Fetching the latest articles...</h3>
                    ) : displayArticles ? (
                        <NewsList 
                            articles={displayArticles}
                            dashboard={false} 
                        />
                    ) : null}
                </Row>
            </Container>
        </Container>
    );
};  

export default NewsPage;