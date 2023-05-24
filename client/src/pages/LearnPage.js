import GlobePanel from '../components/learn/GlobePanel';
import SpeciesSpotlightCard from '../components/learn/datavis/SpeciesSpotlightCard';
import PodcastSpotlight from '../components/learn/PodcastSpotlight';
import DefinitionTooltip from '../components/learn/DefinitionTooltip';
import { Container, Row, Col } from 'reactstrap';
import bgvid from '../app/media/learnpagevideo.mp4';
import lizard from '../app/media/lizard.jpeg';
import hummingbird from '../app/media/hummingbird.jpeg';
import wwf from '../app/media/wwf.png';
import tnc from '../app/media/tnc.png';
import ci from '../app/media/conservation.png';

const LearnPage = () => {
    return (
        <>
            <Container>
                <Row className='text-center'>
                    <div class='video-background'>
                        <video playsInline autoPlay muted loop>
                            <source src={bgvid} type='video/mp4' />
                        </video>
                        <div class='video-overlay'>
                            <h2 className='video-overlay-header'>WHAT IS BIODIVERSITY?</h2>
                            <p className='video-overlay-body'>
                                Biodiversity is the term we use to describe all the different kinds of life you can find in one area—the variety of animals, plants, fungi, and even microorganisms like bacteria that make up our natural world. Each of these species and organisms work together in ecosystems, like an intricate web, to maintain balance and support life.
                            </p>
                        </div>
                    </div>
                </Row>
                <Row className='mt-5'>
                    <Col md='6'>
                        <h3>WHY IS IT IMPORTANT?</h3>
                        <p>
                            Biodiversity plays a crucial role in 
                                <span id='ecosystem-definition' className='definition'> ecosystem </span>
                            health and functionality. Plants and animals participate in the cycling of nutrients, regulation of climate, and purification of air and water. Furthermore, healthy 
                                <span id='ecosystem-definition' className='definition'> ecosystems </span>
                            with high biodiversity are more resilient, able to recover from disturbances such as natural disasters or human-induced changes. A diverse forest can withstand pests or diseases much better than a 
                                <span id='monoculture-definition' className='definition'> monoculture </span>
                            plantation, as the latter may be wiped out if susceptible to a particular threat.
                            <br /><br />
                            Beyond its 
                                <span id='ecology-definition' className='definition'> ecological </span>
                            importance, biodiversity holds immense economic and cultural value. A vast number of industries, including agriculture, pharmaceuticals, and tourism, rely directly or indirectly on biodiversity. Many of our foods, medicines, and industrial materials come from nature. Culturally, numerous societies value biodiversity for spiritual, aesthetic, and recreational reasons, deriving identity, inspiration, and wellbeing from it. Every species is a product of millions of years of evolution and represents a unique piece of life's complex puzzle. Thus, preserving biodiversity is a moral obligation, emphasizing our responsibility as stewards of the planet.
                        </p>

                        <DefinitionTooltip term='Ecosystem' targetId='ecosystem-definition' />
                        <DefinitionTooltip term='Monoculture' targetId='monoculture-definition' />
                        <DefinitionTooltip term='Ecology' targetId='ecology-definition' />
                    </Col>
                    <Col md='6'>
                        <img src={lizard} alt='lizard' className='img-fluid rounded-circle'></img>
                    </Col>
                </Row>
                <hr className='my-5' />
                <Row>
                    <GlobePanel />
                </Row>
                <hr className='my-5' />
                <Row className='text-end'>
                    <Col md='6'>
                        <img src={hummingbird} alt='hummingbird' className='img-fluid rounded-circle'></img>
                    </Col>
                    <Col md='6'>
                        <h3>THREATS TO BIODIVERSITY</h3>
                        <p>                        
                            <b>Human:</b> As human populations continue to expand, we are constantly encroaching upon natural 
                                <span id='habitat-definition' className='definition'> habitats </span>
                            for agriculture, urbanization, and industrial development. Deforestation, in particular, is a major concern, particularly in the world's most biologically rich 
                                <span id='ecosystem-definition' className='definition'> ecosystems </span> 
                            such as the Amazon Rainforest and Southeast Asian rainforests. Aquatic environments are not exempt either, with wetlands, coral reefs, and other marine 
                            <span id='habitat-definition' className='definition'> habitats </span> 
                            suffering destruction and degradation due to human activities such as overfishing and plastic pollution.
                            <br /><br />
                            <b>Climate Change:</b> Rising temperatures and changing weather patterns disrupt the delicate balance of 
                                <span id='ecosystem-definition' className='definition'> ecosystems</span>
                            , making survival difficult for species that are highly adapted to particular environmental conditions. In some cases, this can result in mass migrations, altered behaviors, and reduced populations. Climate change also accelerates the spread of 
                                <span id='invasive-definition' className='definition'> invasive species </span>
                            and pathogens, further threatening biodiversity.
                        </p>

                        <DefinitionTooltip term='Ecosystem' targetId='ecosystem-definition' />
                        <DefinitionTooltip term='Habitat' targetId='habitat-definition' />
                        <DefinitionTooltip term='Invasive Species' targetId='invasive-definition' />
                    </Col>
                </Row>
                <hr className='my-5' />
                <Row>
                    <Col md='8'>
                        <h3 className='mb-3 text-start'>CONSERVATION & PROTECTION</h3>
                        <Row>
                            <p>
                                    <span id='conservation-definition' className='definition'>Conservation </span>
                                and protection strategies for biodiversity are a diverse array of techniques and policies designed to maintain and restore the health and variety of the planet's 
                                    <span id='ecosystem-definition' className='definition'> ecosystems </span>
                                and genetic diversity. Foremost among these strategies is the establishment of protected areas, such as national parks, wildlife reserves, and marine protected areas. These sites, recognized and managed for their 
                                    <span id='ecology-definition' className='definition'> ecological</span>
                                , cultural, or recreational value, provide sanctuaries for species and 
                                    <span id='habitat-definition' className='definition'> habitats</span>
                                , allowing them to flourish with limited human intervention. Internationally, efforts are also made to limit trade in endangered species, with agreements such as the 
                                    <span id='cites-definition' className='definition'> Convention on International Trade in Endangered Species </span>
                                playing a critical role.
                                <br /><br />
                                Complementing these protected areas are landscape and seascape-scale 
                                    <span id='conservation-definition' className='definition'> conservation </span>
                                strategies, such as 
                                    <span id='corridor-definition' className='definition'> ecological corridors </span>
                                that connect 
                                    <span id='fragmentation-definition' className='definition'> fragmented habitats</span>
                                , allowing wildlife to move and interact freely. 
                                    <span id='conservation-definition' className='definition'> Conservation </span> 
                                efforts are also increasingly recognizing the role of indigenous communities and local populations in preserving biodiversity, with community-based 
                                    <span id='conservation-definition' className='definition'> conservation </span> 
                                efforts showing great promise.
                                <br /><br />
                                Legal measures, both national and international, underpin these efforts, providing the framework and enforcement mechanisms necessary to ensure biodiversity 
                                    <span id='conservation-definition' className='definition'> conservation</span>
                                . One such international agreement, the 
                                    <span id='cbd-definition' className='definition'> Convention on Biological Diversity</span>
                                , brings nations together to set targets and report on
                                    <span id='conservation-definition' className='definition'> conservation </span>
                                progress. Lastly, emerging strategies include the use of innovative technology for biodiversity-friendly farming and fishing practices.
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
                            <h4 className='text-center'>CONSERVATION GROUPS</h4>
                        </Row>
                        <Row>
                            <Col md='4' className='d-flex justify-content-center'>
                                <a href='https://www.nature.org/en-us/' target='_blank' rel='noreferrer'>
                                    <img src={tnc} alt='the nature conservancy' className='img-fluid cons-img' />
                                </a>
                            </Col>
                            <Col md='4' className='d-flex justify-content-center'>
                                <a href='https://www.worldwildlife.org/' target='_blank' rel='noreferrer'>
                                    <img src={wwf} alt='world wildlife fund' className='img-fluid cons-img' />
                                </a>
                            </Col>
                            <Col md='4' className='d-flex justify-content-center'>
                                <a href='https://www.conservation.org/' target='_blank' rel='noreferrer'>
                                    <img src={ci} alt='conservation international' className='img-fluid cons-img' />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col md='4'>
                        <SpeciesSpotlightCard />
                    </Col>
                </Row>
                <hr className='my-5' />
                <Row className='text-end'>
                    <h3 className='mb-4'>LISTEN & LEARN</h3>
                </Row>
                <Row>
                    <Col md='6'>
                        
                    </Col>
                    <Col md='6'>
                        <PodcastSpotlight />
                    </Col>
                </Row>
                <hr className='my-5' />
            </Container>
        </>
    );
};

export default LearnPage;