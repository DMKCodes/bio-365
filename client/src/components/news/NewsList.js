import ArticleCard from './ArticleCard';
import { Col } from 'reactstrap';

const NewsList = ({ articles, dashboard }) => {
    return (
        articles.map((article) => {
            return (
                <Col lg='4' md='6' key={article.title}>
                    <ArticleCard article={article} dashboard={dashboard} />
                </Col>
            );
        })
    );
};

export default NewsList;