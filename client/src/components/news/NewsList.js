import ArticleCard from './ArticleCard';
import { Col } from 'reactstrap';

const NewsList = ({ data, error, isLoading, dashboard }) => {
    let content;

    if (error) {
        content = <p>Error retrieving articles. Please refresh and try again.</p>;
    } else if (isLoading) {
        content = <p>Loading...</p>;
    } else if (data) {
        content = (
            data.articles.map((article) => {
                return (
                    <Col lg='4' md='6' key={article.title}>
                        <ArticleCard article={article} dashboard={dashboard} />
                    </Col>
                );
            })
        );
    } else {
        content = <p>Unknown error fetching articles. Please refresh and try again.</p>;
    }

    return (
        <>
            {content}
        </>
    );
};

export default NewsList;