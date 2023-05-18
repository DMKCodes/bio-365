import GlobePanel from '../components/learn/GlobePanel';
import { Container, Row } from 'reactstrap';

const LearnPage = () => {
    return (
        <Container>
            <Row className='text-center'>
                <h2>What is biodiversity?</h2>
                <p>Biodiversity is the term we use to describe all the different kinds of life you can find in one area—the variety of animals, plants, fungi, and even microorganisms like bacteria that make up our natural world. Each of these species and organisms work together in ecosystems, like an intricate web, to maintain balance and support life.</p>
            </Row>
            <Row className='text-center'>
                <h2>Why is it important?</h2>
                <p>Biodiversity supports a healthy and resilient environment. When lots of different types of plants, animals, and microorganisms are present, our environment can better withstand and recover from a variety of shocks and disruptions, including diseases and natural disasters. Plus, a rich variety of species helps humans by providing natural resources such as food, clean water, and medicine.</p>
            </Row>
            <Row>
                <GlobePanel />
            </Row>
        </Container>
    );
};

export default LearnPage;