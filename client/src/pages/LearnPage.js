import { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
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
import ExternalButton from '../components/ExternalButton';
import defineKeywords from '../utils/defineKeywords';
import { 
    IMPORTANT_CONTENT, 
    THREATS_MAIN_CONTENT, 
    CONSERVATION_CONTENT 
} from '../app/shared/LEARN_CONTENT';
import { LEARN_PAGE_VIDEO_BG } from '../app/shared/VIDEO_BACKGROUNDS';
import importantImg from '../app/media/bio-importance.jpg';
import importantImgLg from '../app/media/bio-importance-lg.jpg';
import threatImg from '../app/media/climate-change-wildlife.jpg';
import threatImgLg from '../app/media/climate-change-wildlife-lg.jpg';

const LearnPage = () => {
    const [showGlobePanel, setShowGlobePanel] = useState(true);

    return (
        <Container fluid className='p-0'>
            <VideoBackground video={LEARN_PAGE_VIDEO_BG} />
            <Header />
            <LearnNavigation />

            <Container className='my-5'>
                <Row className='pt-5 text-center'>
                    <Col lg='7' className='d-flex flex-column justify-content-center'>
                        <h4 className='mb-4 text-uppercase fw-bold'>Why is it important?</h4>
                        {IMPORTANT_CONTENT.map((text, index) => {
                            const textWithKeywords = defineKeywords(text);
                            return <p key={index}>{textWithKeywords}</p>;
                        })}
                        <ExternalButton link='https://www.nrdc.org/stories/biodiversity-101' />
                    </Col>
                    <Col lg='5' className='d-flex flex-column justify-content-center align-items-center mt-5 mt-md-0'>
                        <img 
                            src={importantImg} 
                            alt='a honeybee pollenates blue flowers' 
                            className='learn-img img-fluid d-none d-lg-block'
                        />
                        <img
                            src={importantImgLg}
                            alt='a honeybee pollenates blue flowers'
                            className='learn-img img-fluid mt-4 d-block d-lg-none'
                        />
                        <small className='text-muted mt-1'>Photo Credit: Łukasz Rawa</small>
                        <small className='w-75'>Pollination plays a critical role in the reproduction of many plants, supporting healthy ecosystems and ensuring the foods we all eat continue to grow.</small>
                    </Col>
                </Row>

                <hr id='globe-section' className='learn-section' />

                <Row>
                    <div className='d-flex justify-content-center align-items-center mb-4'>
                        <h4 className='text-center text-uppercase fw-bold mb-0'>Around the Globe</h4>
                        <Button
                            outline
                            color='dark'
                            className='btn-sm ms-3 rounded-0'
                            onClick={() => setShowGlobePanel(!showGlobePanel)}
                        >
                            {showGlobePanel ? 'Hide' : 'Show'}
                        </Button>
                    </div>
                    <span className={showGlobePanel ? 'd-block p-0' : 'd-none'}>
                        <GlobePanel />
                    </span>
                </Row>

                <hr id='threats-section' className='learn-section' />

                <Row>
                    <h4 className='mb-4 fw-bold text-uppercase d-block d-lg-none text-center'>Under Threat</h4>
                    <Col lg='6' xl='5' className='d-flex flex-column justify-content-center align-items-center mt-md-0'>
                        <img 
                            src={threatImg} 
                            alt='bedraggled kangaroos after a wildfire' 
                            className='learn-img img-fluid d-none d-lg-block' 
                        />
                        <img
                            src={threatImgLg}
                            alt='bedraggled kangaroos after a wildfire'
                            className='learn-img img-fluid d-block d-lg-none'
                        />
                        <small className='text-muted mt-1'>Photo Credit: Jo-Anne McArthur</small>
                        <small className='w-75 mb-4 mb-lg-0 text-center'>Climate change has increased the frequency and intensity of extreme events, such as wildfires, which threaten the survival of thousands of plant and animal species.</small>
                    </Col>
                    <Col lg='6' xl='7' className='text-center'>
                        <h4 className='mb-3 fw-bold text-uppercase d-none d-lg-block'>Under Threat</h4>
                        {THREATS_MAIN_CONTENT.map((text, index) => {
                            const textWithKeywords = defineKeywords(text);
                            return <p key={index}>{textWithKeywords}</p>;
                        })}
                        <ThreatsAccordion />
                        <ExternalButton link='https://livingplanet.panda.org/en-US/' />
                    </Col>
                </Row>

                <hr id='conservation-section' className='learn-section' />

                <Row className='d-flex justify-content-center text-center'>
                    <Col lg='7' xl='8' className='px-3 px-lg-4 px-xl-5'>
                        <h4 className='mb-3 text-uppercase fw-bold'>Conservation Strategies</h4>
                        <Row>
                            {CONSERVATION_CONTENT.map((text, index) => {
                                const textWithKeywords = defineKeywords(text);
                                return <p key={index}>{textWithKeywords}</p>;
                            })}
                        </Row>
                        <Row className='my-3'>
                            <h4 className='text-center text-uppercase fw-bold'>Conservation Groups</h4>
                        </Row>
                        <ConservationGroupList />
                    </Col>
                    <Col md='8' lg='5' xl='4' className='d-flex flex-column'>
                        <h4 className='text-center text-uppercase fw-bold mb-3 mt-3 mt-lg-0'>Conservation Spotlight</h4>
                        <SpeciesSpotlightCard />
                    </Col>
                </Row>

                <hr id='listen-section' className='learn-section' />

                <Row className='text-center'>
                    <h4 className='mb-4 fw-bold text-uppercase'>Listen & Learn</h4>
                </Row>
                <PodcastSpotlight />
                <PodcastList />

                <TopButton />
            </Container>
        </Container>
    );
};

export default LearnPage;