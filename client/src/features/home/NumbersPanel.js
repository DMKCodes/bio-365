import { Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { BY_THE_NUMBERS } from '../../app/shared/BY_THE_NUMBERS';

const NumbersPanel = () => {
    return (
        <Row className='text-light p-5 mb-5'>
            <Col md='4' lg='3'>
                <h2 className='fr mb-3 fw-bold'>By the Numbers</h2>
                <p className='mb-3 me-4'>
                    The risk to our planet's wildlife is unprecedented in modern history, which makes conservation more important than ever.
                </p>
                <Button
                    type='link'
                    color='success'
                    href='https://wwflpr.awsassets.panda.org/downloads/lpr_2022_full_report.pdf'
                    target='_blank'
                    rel='noreferrer noopener'
                    className='rounded-0 mb-4 me-4'
                >
                    Read WWF's Living Planet Report 2022<FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ms-2' />
                </Button>
            </Col>
            <Col md='8' lg='9' className='mt-3 mt-md-0'>
                <Row>
                    {BY_THE_NUMBERS.map((item, index) => {
                        return (
                            <Col lg='6' xl='4' key={index} className='mb-4 pe-0 pe-lg-5'>
                                <div className='d-flex align-items-center mb-1'>
                                    <FontAwesomeIcon icon={item.icon} size='2x' className='me-3 text-success' />
                                    <h5 className='fr fw-bold display-5 mb-0'>{item.figure}</h5>
                                </div>
                                <small>
                                    {item.content}
                                </small>
                            </Col>
                        );
                    })}
                    <Col xl='4' className='ms-auto d-flex align-items-center mt-3 mt-md-0 pe-5'>

                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default NumbersPanel;