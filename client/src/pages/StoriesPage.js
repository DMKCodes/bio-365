import { Container, Row } from 'reactstrap';
import StoriesList from '../features/stories/StoriesList';

const StoriesPage = () => {
    return (
        <Container>
            <Row className='text-center mb-3'>
                <h2 className='text-uppercase'>Stories</h2>
                <small className='text-muted'>
                    Bite-sized, scrollable looks into the challenges facing biodiversity.
                </small>
            </Row>
            <StoriesList />
        </Container>
    );
};

export default StoriesPage;