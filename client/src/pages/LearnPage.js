import GlobePanel from '../components/learn/GlobePanel';
import DefinitionTooltip from '../components/learn/DefinitionTooltip';
import { Container, Row, Col } from 'reactstrap';
import lizard from '../app/media/lizard.jpeg';

const LearnPage = () => {
    return (
        <Container>
            <Row className='text-center'>
                <h2><b>WHAT IS BIODIVERSITY?</b></h2>
                <p>Biodiversity is the term we use to describe all the different kinds of life you can find in one area—the variety of animals, plants, fungi, and even microorganisms like bacteria that make up our natural world. Each of these species and organisms work together in 
                    <span id='ecosystem-definition' className='definition'> ecosystems</span>
                , like an intricate web, to maintain balance and support life.</p>

                <DefinitionTooltip term='Ecosystem' targetId='ecosystem-definition' />
            </Row>
            <hr className='my-5' />
            <Row className='text-center'>
                <Col md='6'>
                    <h3>WHY IS IT IMPORTANT?</h3>
                    <p>Biodiversity supports a healthy and resilient environment. When lots of different types of plants, animals, and microorganisms are present, our environment can better withstand and recover from a variety of shocks and disruptions, including diseases and natural disasters. A rich variety of species helps humans by providing natural resources such as food, clean water, and medicine.</p>
                </Col>
                <Col md='6'>
                    <img src={lizard} alt='lizard' className='img-fluid'></img>
                </Col>
            </Row>
            <hr className='my-5' />
            <Row>
                <GlobePanel />
            </Row>
            <hr className='my-5' />
        </Container>
    );
};

export default LearnPage;