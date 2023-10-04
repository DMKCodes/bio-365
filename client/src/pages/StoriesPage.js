import { Container, Row } from 'reactstrap';
import StoriesList from '../features/stories/StoriesList';
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import { STORY_PAGE_VIDEO_BG } from '../app/shared/VIDEO_BACKGROUNDS';

const StoriesPage = () => {
    return (
        <Container fluid className='p-0'>
            <VideoBackground video={STORY_PAGE_VIDEO_BG} />
            <Header />

            <Container className='my-5 px-4'>
                <h2 className='text-center fw-bold mb-5'>Our Stories</h2>

                <StoriesList />

                <h2 className='text-center fw-bold mb-5'>User Stories</h2>
                <p className='text-center'>
                    If you have your own story to tell, get in touch via our feedback form to collaborate!
                </p>
            </Container>
        </Container>
    );
};

export default StoriesPage;