import { Container, Row, Col } from 'reactstrap';
import Header from '../components/Header';
import VideoBackground from '../components/VideoBackground';
import FeaturedContent from '../components/FeaturedContent';
import YoutubeEmbed from '../components/YoutubeEmbed';
import { HOME_PAGE_VIDEO_BG } from '../app/shared/VIDEO_BACKGROUNDS';
import { IPBES_REPORT } from '../app/shared/FEATURES';
import puffins from '../app/media/puffins.jpg';

const HomePage = () => {
    return (
        <Container fluid className='p-0'>
            <VideoBackground video={HOME_PAGE_VIDEO_BG} />
            <Header />

            <Container className='my-5'>
                <Row>
                    <Col lg='7' className='p-0 bg-warning'></Col>
                    <Col lg='5' className='p-0'>
                        <YoutubeEmbed id='GlWNuzrqe7U' />
                    </Col>
                </Row>
                
                <Row>
                    <Col lg='5' className='p-0'>
                        <img src={puffins} alt='puffins in the wild' className='img-fluid' />
                    </Col>
                    <Col lg='7' className='p-0 bg-success'>
                        
                    </Col>
                </Row>
                
                <FeaturedContent feature={IPBES_REPORT} />
            </Container>
        </Container>
    );
};

export default HomePage;