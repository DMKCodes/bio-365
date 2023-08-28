import { Container, Row } from 'reactstrap';
import StoriesList from '../features/stories/StoriesList';
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import { STORY_PAGE_VIDEO_BG } from '../app/shared/VIDEO_BACKGROUNDS';

const StoriesPage = () => {
    return (
        <Container fluid className='p-0'>
            <Row id='intro-section' className='text-center mb-5'>
                <VideoBackground video={STORY_PAGE_VIDEO_BG} />
            </Row>
            <Header />

            <Container>
                <StoriesList />
            </Container>
        </Container>
    );
};

export default StoriesPage;