import { Row } from 'reactstrap';
import ImperviousVideoBackground from './ImperviousVideoBackground';
import ImperviousIntroduction from './ImperviousIntroduction';
import ImperviousThreats from './ImperviousThreats';
import ImperviousSolutions from './ImperviousSolutions';

const ImperviousStory = () => {
    return (
        <>
            <ImperviousVideoBackground />
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
        </>
    );
};

export default ImperviousStory;