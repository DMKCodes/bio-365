import { Row, Col } from 'reactstrap';
import Donations from '../../components/Donations';
import { DONATIONS_DIRECT_SUPPORT } from '../../app/shared/DONATIONS';
import signature from '../../app/media/signature.png';
import me from '../../app/media/me.jpg';

const WhoAmI = () => {
    const { description } = DONATIONS_DIRECT_SUPPORT;

    return (
        <Row>
            <Col lg='8' xl='6' className='mx-auto my-auto'>
                <img src={me} alt='me and my son on a hike' className='img-fluid' />
            </Col>
            <Col xl='6' className='d-flex flex-column justify-content-center text-center text-xl-start'>
                <h2 className='pf mb-4 fw-bold mt-4 mt-xl-0'>Who am I?</h2>
                {description.map((text, index) => {
                    return (
                        <p key={index} className='donations-direct-content px-4 px-sm-2'>{text}</p>
                    );
                })}
                <img 
                    src={signature} 
                    alt='signed name Doug' 
                    className='signature mb-4 mx-auto mx-xl-0 me-auto me-xl-auto'
                />
                <Donations />
            </Col>
        </Row>
    );
};

export default WhoAmI;