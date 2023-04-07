import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAllArticles, clearAllArticles } from '../features/news/newsSlice';
import { useArticlesQuery } from '../features/news/newsApiSlice';
import Subheader from '../components/utils/Subheader';
import NewsList from '../components/news/NewsList';
import NewsFilter from '../components/news/NewsFilter';
import { Container, Row } from 'reactstrap';

const NewsPage = () => {
    const dispatch = useDispatch();

    const {
        data,
        error,
        isLoading
    } = useArticlesQuery();

    useEffect(() => {
        dispatch(clearAllArticles());
        dispatch(setAllArticles(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <Container>
            <Subheader current={'News'} />
            <NewsFilter />
            <Row>
                <NewsList data={data} error={error} isLoading={isLoading} dashboard={false} />
            </Row>
        </Container>
    );
};  

export default NewsPage;