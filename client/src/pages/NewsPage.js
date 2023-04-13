import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    setAllArticles, 
    clearAllArticles, 
    setDisplayArticles,
    selectDisplayArticles
} from '../features/news/newsSlice';
import { useArticlesQuery } from '../features/news/newsApiSlice';
import Subheader from '../components/utils/Subheader';
import NewsList from '../components/news/NewsList';
import NewsFilter from '../components/news/NewsFilter';
import { Container, Row } from 'reactstrap';

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
        <Container>
            <Subheader current={'News'} />
            <NewsFilter />
            <Row>
                {isError ? (
                    <p>Error retrieving articles. Please refresh and try again.</p>
                ) : isLoading ? (
                    <p>Fetching the latest articles...</p>
                ) : displayArticles ? (
                    <NewsList 
                        articles={displayArticles}
                        dashboard={false} 
                    />
                ) : null}
            </Row>
        </Container>
    );
};  

export default NewsPage;