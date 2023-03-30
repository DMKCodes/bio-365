import { useArticlesQuery } from '../../features/newsApiSlice';
import ArticleCard from './ArticleCard';
import { Col } from 'reactstrap';

const NewsList = () => {
    const {
        data,
        error,
        isLoading
    } = useArticlesQuery();

    let content;

    if (error) {
        content = <p>Error retrieving articles. Please refresh and try again.</p>;
    } else if (isLoading) {
        content = <p>Loading...</p>;
    } else if (data) {
        content = (
            data.articles.map((article) => {
                return (
                    <Col lg='4' md='6'>
                        <ArticleCard article={article} />
                    </Col>
                );
            })
        );
    } else {
        content = <p>Unknown error. Please refresh and try again.</p>;
    }

    return content;
};

export default NewsList;