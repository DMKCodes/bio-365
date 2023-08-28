import {
    Container,
    Row,
    Col
} from 'reactstrap';
import Header from '../components/Header';
import VideoBackground from '../components/VideoBackground';
import LearnNavigation from '../features/learn/LearnNavigation';
import GlobePanel from '../features/learn/sections/interactive-globe/GlobePanel';
import ThreatsAccordion from '../features/learn/sections/threats/ThreatsAccordion';
import ConservationGroupList from '../features/learn/sections/conservation/ConservationGroupList';
import SpeciesSpotlightCard from '../features/learn/sections/conservation/SpeciesSpotlightCard';
import PodcastSpotlight from '../features/learn/sections/listen-and-learn/PodcastSpotlight';
import PodcastList from '../features/learn/sections/listen-and-learn/PodcastList';
import TopButton from '../components/TopButton';
import defineKeywords from '../utils/defineKeywords';
import { 
    IMPORTANT_CONTENT, 
    THREATS_MAIN_CONTENT, 
    CONSERVATION_CONTENT 
} from '../app/shared/LEARN_CONTENT';
import { LEARN_PAGE_VIDEO_BG } from '../app/shared/VIDEO_BACKGROUNDS';
import lizard from '../app/media/lizard.jpeg';
import hummingbird from '../app/media/hummingbird.jpeg';

const LearnPage = () => {
    return (
        <Container fluid className='p-0'>
            <VideoBackground video={LEARN_PAGE_VIDEO_BG} />
            <Header />
            <LearnNavigation />

            <Container className='my-5'>
                <Row className='text-center'>
                    <Col md='6'>
                        <h3 className='mb-3 text-uppercase'>Why is it important?</h3>
                        {IMPORTANT_CONTENT.map((text, index) => {
                            const textWithKeywords = defineKeywords(text);
                            return <p key={index}>{textWithKeywords}</p>;
                        })}
                        <small className='text-muted text-center'>
                            <a
                                href='https://www.nrdc.org/stories/biodiversity-101'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Read more at NRDC...
                            </a>
                        </small>
                    </Col>
                    <Col md='6' className='d-flex align-items-center'>
                        <img src={lizard} alt='lizard' className='img-fluid rounded-circle'></img>
                    </Col>
                </Row>

                <hr id='globe-section' className='my-5 learn-section' />

                <Row>
                    <h3 className='text-center mb-3 text-uppercase'>Biodiversity Around the World</h3>
                    <GlobePanel />
                </Row>

                <hr id='threats-section' className='my-5 learn-section' />

                <Row className=''>
                    <Col md='6'>
                        <h3 className='mb-3 text-uppercase text-center'>Threats to Biodiversity</h3>
                        {THREATS_MAIN_CONTENT.map((text, index) => {
                            const textWithKeywords = defineKeywords(text);
                            return <p key={index} className='text-center'>{textWithKeywords}</p>;
                        })}
                        <ThreatsAccordion />
                        <small className='text-muted mt-3 text-start'>
                            <a 
                                href='https://livingplanet.panda.org/en-US/' 
                                target='_blank' 
                                rel='noreferrer'
                            >
                                Explore WWF's Living Planet Report 2022...
                            </a>
                        </small>
                    </Col>
                    <Col md='6' className='d-flex align-items-center'>
                        <img src={hummingbird} alt='hummingbird' className='img-fluid rounded-circle'></img>
                    </Col>
                </Row>

                <hr id='conservation-section' className='my-5 learn-section' />

                <Row className='text-center'>
                    <Col md='4'>
                        <SpeciesSpotlightCard />
                    </Col>
                    <Col md='8'>
                        <h3 className='mb-3 text-uppercase'>Conservation Strategies</h3>
                        <Row>
                            {CONSERVATION_CONTENT.map((text, index) => {
                                const textWithKeywords = defineKeywords(text);
                                return <p key={index}>{textWithKeywords}</p>;
                            })}
                        </Row>
                        <Row className='my-3'>
                            <h4 className='text-center text-uppercase'>Conservation Groups</h4>
                        </Row>
                        <ConservationGroupList />
                    </Col>
                </Row>

                <hr id='listen-section' className='my-5 learn-section' />

                <Row className='text-center'>
                    <h3 className='mb-4 text-uppercase'>Listen & Learn</h3>
                </Row>
                <PodcastSpotlight />
                <PodcastList />

                <TopButton />
            </Container>
        </Container>
    );
};

export default LearnPage;