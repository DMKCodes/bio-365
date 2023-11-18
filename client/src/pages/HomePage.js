import { Container } from 'reactstrap';
import Header from '../components/Header';
import VideoBackground from '../components/VideoBackground';
import IntroPanel from '../features/home/IntroPanel';
import FeaturedContent from '../features/home/FeaturedContent';
import NumbersPanel from '../features/home/NumbersPanel';
import HelpPanel from '../features/home/HelpPanel';
import HomePageArticles from '../features/articles/HomePageArticles';
import TopButton from '../components/TopButton';
import { HOME_PAGE_VIDEO_BG } from '../app/shared/VIDEO_BACKGROUNDS';
import { IPBES_REPORT } from '../app/shared/FEATURES';

const HomePage = () => {
    return (
        <Container fluid className='p-0'>
            <VideoBackground video={HOME_PAGE_VIDEO_BG} />
            <Header />

            <Container className='mt-5 home-page-section'>
                <IntroPanel />
            </Container>

            <Container className='home-page-section'>
                <FeaturedContent feature={IPBES_REPORT} />
            </Container>

            <Container fluid className='home-page-section bg-dark'>
                <NumbersPanel />
            </Container>

            <Container className='home-page-section'>
                <HomePageArticles />
            </Container>

            <Container fluid className='home-page-section mb-5'>
                <HelpPanel />
            </Container>
            
            <TopButton />
        </Container>
    );
};

export default HomePage;