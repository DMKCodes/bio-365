import { Container, Row } from 'reactstrap';
import StoriesList from '../features/stories/StoriesList';

const StoriesPage = () => {
    return (
        <Container>
            <Row className='text-center'>
                <h2 className='text-uppercase'>Stories</h2>
                <small>
                    Bite-sized, scrollable looks into the challenges facing biodiversity around the world.
                    <br />
                    Check back for new stories, or get in touch via our feedback form if you have your own story to tell about biodiversity!
                </small>
            </Row>
            <StoriesList />
        </Container>
    );
};

export default StoriesPage;