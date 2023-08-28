import { Container, Row } from 'reactstrap';
import VideoBackground from '../../../components/VideoBackground';
import Header from '../../../components/Header';
import ImperviousIntroduction from './ImperviousIntroduction';
import ImperviousThreats from './ImperviousThreats';
import ImperviousSolutions from './ImperviousSolutions';
import ImperviousSummary from './ImperviousSummary';
import { IMPERVIOUS_VIDEO_BG } from '../../../app/shared/VIDEO_BACKGROUNDS';

const ImperviousStory = () => {
    return (
        <>
            <VideoBackground video={IMPERVIOUS_VIDEO_BG} />
            <Header />
            
            <Container>
                <Row className='mt-5'>
                    <h2 className='text-uppercase text-center fw-bold'>1. Introduction</h2>
                </Row>
                <ImperviousIntroduction />
                <Row className='mt-5'>
                    <h2 className='text-uppercase text-center fw-bold'>2. Threats to Biodiversity</h2>
                </Row>
                <ImperviousThreats />
                <Row className='mt-5'>
                    <h2 className='text-uppercase text-center fw-bold'>3. Solutions</h2>
                </Row>
                <ImperviousSolutions />
                <Row className='mt-5 mb-3'>
                    <h2 className='text-uppercase text-center fw-bold mb-5'>Conclusion</h2>
                </Row>
                <ImperviousSummary />
            </Container>
        </>
    );
};

export default ImperviousStory;