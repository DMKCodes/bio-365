import ArticleCard from './ArticleCard';
import FeaturedArticle from './FeaturedArticle';
import { Col } from 'reactstrap';

const NewsList = ({ articles, dashboard }) => {
    if (!articles) {
        return <p>Loading...</p>;
    } else {
        return (
            !dashboard ? (
                articles.map((article, index) => {
                    if (index === 0 || index % 16 === 0) {
                        return (
                            <FeaturedArticle
                                article={article}
                                key={index}
                                dashboard={dashboard}
                            />
                        );
                    } else {
                        return (
                            <Col lg='4' md='6' key={index}>
                                <ArticleCard article={article} dashboard={dashboard} />
                            </Col>
                        );
                    }
                })
            ) : (
                articles.map((article, index) => {
                    return (
                        <Col lg='4' md='6' key={index}>
                            <ArticleCard article={article} dashboard={dashboard} />
                        </Col>
                    );
                })
            )
        );
    }
};

export default NewsList;