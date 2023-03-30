import Subheader from '../components/utils/Subheader';
import NewsList from '../components/news/NewsList';
import { Container, Row } from 'reactstrap';

const NewsPage = () => {
    return (
        <Container>
            <Subheader current={'News'}/>
            <Row>
                <NewsList />
            </Row>
        </Container>
    );
};  

export default NewsPage;