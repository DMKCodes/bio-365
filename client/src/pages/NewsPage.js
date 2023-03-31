import { useArticlesQuery } from '../features/news/newsApiSlice';
import Subheader from '../components/utils/Subheader';
import NewsList from '../components/news/NewsList';
import NewsFilter from '../components/news/NewsFilter';
import { Container, Row } from 'reactstrap';

const NewsPage = () => {
    const {
        data,
        error,
        isLoading
    } = useArticlesQuery();

    return (
        <Container>
            <Subheader current={'News'}/>
            <NewsFilter />
            <Row>
                <NewsList data={data} error={error} isLoading={isLoading} />
            </Row>
        </Container>
    );
};  

export default NewsPage;