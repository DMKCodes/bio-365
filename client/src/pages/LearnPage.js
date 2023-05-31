import {
    Container,
    Row,
    Col
} from 'reactstrap';
import VideoBackground from '../components/learn/VideoBackground';
import LearnNavigation from '../components/learn/LearnNavigation';
import GlobePanel from '../components/learn/sections/interactive-globe/GlobePanel';
import ThreatsAccordion from '../components/learn/sections/threats/ThreatsAccordion';
import ConservationGroupList from '../components/learn/sections/conservation/ConservationGroupList';
import SpeciesSpotlightCard from '../components/learn/datavis/SpeciesSpotlightCard';
import PodcastSpotlight from '../components/learn/sections/listen-and-learn/PodcastSpotlight';
import PodcastList from '../components/learn/sections/listen-and-learn/PodcastList';
import DefinitionTooltip from '../components/learn/DefinitionTooltip';
import lizard from '../app/media/lizard.jpeg';
import hummingbird from '../app/media/hummingbird.jpeg';

const LearnPage = () => {
    return (
        <Container>
            <Row className='text-center m-0'>
                <VideoBackground />
            </Row>
            <LearnNavigation />

            <hr id='important-section' className='learn-section' />

            <Row className='mt-5 text-center'>
                <Col md='6'>
                    <h3 className='mb-3 text-uppercase'>Why is it important?</h3>
                    <p>
                        Biodiversity plays a crucial role in
                            <span id='ecosystem-definition' className='definition'> ecosystem </span>
                        health and functionality. Plants and animals participate in the cycling of nutrients, regulation of climate, and purification of air and water. Healthy
                            <span id='ecosystem-definition' className='definition'> ecosystems </span>
                        with high biodiversity are more resilient—better able to recover from disturbances such as natural disasters or human-induced change. A diverse forest can withstand pests or diseases much better than a
                            <span id='monoculture-definition' className='definition'> monoculture </span>
                        plantation, as the latter may be wiped out if susceptible to a particular threat.
                            <br /><br />
                        Beyond its
                            <span id='ecology-definition' className='definition'> ecological </span>
                        importance, biodiversity holds immense economic and cultural value. A vast number of industries, including agriculture, pharmaceuticals, and tourism, rely directly or indirectly on biodiversity. Many of our foods, medicines, and industrial materials come from nature. Culturally, numerous societies value biodiversity for spiritual, aesthetic, and recreational reasons, deriving from it identity, inspiration, and wellbeing. Every species is a product of millions of years of evolution and represents a unique piece of life's complex puzzle. Thus, preserving biodiversity is also a moral obligation, emphasizing our responsibility as stewards of the planet.
                    </p>
                    <DefinitionTooltip term='Ecosystem' targetId='ecosystem-definition' />
                    <DefinitionTooltip term='Monoculture' targetId='monoculture-definition' />
                    <DefinitionTooltip term='Ecology' targetId='ecology-definition' />
                </Col>
                <Col md='6' className='d-flex align-items-center'>
                    <img src={lizard} alt='lizard' className='img-fluid rounded-circle'></img>
                </Col>
                <small className='text-muted text-start'>
                    <a
                        href='https://www.nrdc.org/stories/biodiversity-101'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Read more at NRDC...
                    </a>
                </small>
            </Row>

            <hr id='globe-section' className='my-5 learn-section' />

            <Row>
                <h3 className='text-center mb-3 text-uppercase'>Biodiversity Around the World</h3>
                <GlobePanel />
            </Row>

            <hr id='threats-section' className='my-5 learn-section' />

            <Row className='text-center'>
                <Col md='6'>
                    <h3 className='mb-3 text-uppercase'>Threats to Biodiversity</h3>
                    <p>
                        There are many threats to biodiversity today, but the most critical can be remembered by the acronym
                            <span id='hippo-definition' className='definition'> H.I.P.P.O.</span>
                        , coined by biologist
                            <span id='eo-wilson-definition' className='definition'> E.O. Wilson</span>
                        .
                    </p>
                    <ThreatsAccordion />
                    <DefinitionTooltip term='E.O. Wilson' targetId='eo-wilson-definition' />
                    <DefinitionTooltip term='HIPPO' targetId='hippo-definition' />
                </Col>
                <Col md='6' className='d-flex align-items-center'>
                    <img src={hummingbird} alt='hummingbird' className='img-fluid rounded-circle'></img>
                </Col>
                <small className='text-muted mt-3 text-start'>
                    <a 
                        href='https://livingplanet.panda.org/en-US/' 
                        target='_blank' 
                        rel='noreferrer'
                    >
                        Explore WWF's Living Planet Report 2022...
                    </a>
                </small>
            </Row>

            <hr id='conservation-section' className='my-5 learn-section' />

            <Row className='text-center'>
                <Col md='4'>
                    <SpeciesSpotlightCard />
                </Col>
                <Col md='8'>
                    <h3 className='mb-3 text-uppercase'>Conservation Strategies</h3>
                    <Row>
                        <p>
                                <span id='conservation-definition' className='definition'>Conservation </span>
                            and protection strategies for biodiversity are a diverse array of techniques and policies designed to maintain and restore the health and variety of the planet's
                                <span id='ecosystem-definition' className='definition'> ecosystems</span>
                            . Foremost among these strategies is the establishment of protected areas, such as national parks, wildlife reserves, and marine protected areas. These sites, recognized for their
                                <span id='ecology-definition' className='definition'> ecological</span>
                            , cultural, and recreational value, provide sanctuaries for species and
                                <span id='habitat-definition' className='definition'> habitats</span>
                            , allowing them to flourish with limited human intervention.
                                <br /><br />
                            Complementing these protected areas are landscape and seascape-scale
                                <span id='conservation-definition' className='definition'> conservation </span>
                            strategies, such as
                                <span id='corridor-definition' className='definition'> ecological corridors </span>
                            that connect
                                <span id='fragmentation-definition' className='definition'> fragmented habitats</span>
                            , allowing wildlife to move and interact freely. Experts are also increasingly recognizing the role of indigenous communities and local populations in preserving biodiversity, with community-based efforts{' '}
                            <a
                                href='https://www.thegef.org/sites/default/files/publications/indigenous-community-biodiversity_0.pdf'
                                target='_blank'
                                rel='noreferrer'
                            >
                                showing great promise.
                            </a>
                            <br /><br />
                            Legal measures, both national and international, underpin these tactics, providing the framework and enforcement mechanisms necessary to ensure biodiversity
                                <span id='conservation-definition' className='definition'> conservation</span>
                            . One such international agreement, the
                                <span id='cbd-definition' className='definition'> Convention on Biological Diversity</span>
                            , brings nations together to set targets and report on
                                <span id='conservation-definition' className='definition'> conservation </span>
                            progress.  Internationally, efforts are also made to limit trade in endangered species, with agreements such as the
                                <span id='cites-definition' className='definition'> Convention on International Trade in Endangered Species </span>
                            playing a critical role.
                        </p>
                        <DefinitionTooltip term='Ecosystem' targetId='ecosystem-definition' />
                        <DefinitionTooltip term='Conservation' targetId='conservation-definition' />
                        <DefinitionTooltip term='CBD' targetId='cbd-definition' />
                        <DefinitionTooltip term='Fragmentation' targetId='fragmentation-definition' />
                        <DefinitionTooltip term='Wildlife Corridor' targetId='corridor-definition' />
                        <DefinitionTooltip term='Habitat' targetId='habitat-definition' />
                        <DefinitionTooltip term='CITES' targetId='cites-definition' />
                        <DefinitionTooltip term='Ecology' targetId='ecology-definition' />
                    </Row>
                    <Row className='my-3'>
                        <h4 className='text-center text-uppercase'>Conservation Groups</h4>
                    </Row>
                    <ConservationGroupList />
                </Col>
            </Row>

            <hr id='listen-section' className='my-5 learn-section' />

            <Row className='text-center'>
                <h3 className='mb-4'>Listen & Learn</h3>
            </Row>
            <PodcastSpotlight />
            <PodcastList />

            <hr className='my-5' />
        </Container>
    );
};

export default LearnPage;