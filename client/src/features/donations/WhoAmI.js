import { Row, Col, Button } from 'reactstrap';
import { useTheme } from '../../hooks/ThemeProvider';
import { DONATIONS_DIRECT_SUPPORT } from '../../app/shared/DONATIONS';
import signature from '../../app/media/signature.png';
import signatureWhite from '../../app/media/signature-white.png';
import me from '../../app/media/me.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const WhoAmI = () => {
    const { mode } = useTheme();

    const { description } = DONATIONS_DIRECT_SUPPORT;

    return (
        <Row>
            <Col lg='8' xl='6' className='mx-auto my-auto'>
                <img src={me} alt='me and my son on a hike' className='img-fluid' />
            </Col>
            <Col xl='6' className='d-flex flex-column justify-content-center'>
                <h2 className='pf fw-bold mb-4 mt-4 mt-xl-0 text-center'>Who am I?</h2>
                {description.map((text, index) => {
                    return (
                        <p key={index} className='donations-direct-content px-4 px-sm-2'>{text}</p>
                    );
                })}
                <img 
                    src={mode === 'dark' ? signatureWhite : signature} 
                    alt='signed name Doug' 
                    className='signature mb-4 mx-auto mx-xl-0 ms-3 me-xl-auto'
                />
                <Button
                    type='link'
                    href='https://www.buymeacoffee.com/dmkcodes'
                    target='_blank'
                    rel='noreferrer noopener'
                    color='success' 
                    className='rounded-0 mb-3 me-auto'
                >
                    Support Biodiversity365<FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ms-2' />
                </Button>
            </Col>
        </Row>
    );
};

export default WhoAmI;