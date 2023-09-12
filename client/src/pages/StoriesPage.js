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

            <Container className='mb-5'>
                <h2 className='text-center fw-bold'>Our Stories</h2>
                <p className='text-center'>
                    If you have your own story to tell, get in touch via our feedback form to collaborate!
                </p>
                <StoriesList />
                <h2 className='text-center fw-bold'>User Stories</h2>
                <p className='text-center'>
                    If you have your own story to tell, get in touch via our feedback form to collaborate!
                </p>
            </Container>
        </Container>
    );
};

export default StoriesPage;