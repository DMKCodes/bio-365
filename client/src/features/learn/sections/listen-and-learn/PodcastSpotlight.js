import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const PodcastSpotlight = () => {
    return (
        <Row className='d-flex justify-content-center'>
            <Col md='6'>
                <Row className='px-3'>
                    <iframe 
                        src='https://www.listennotes.com/podcasts/conservation/s4-ep1-lowell-baier-codex-of-91nsov8t6TB/embed/' 
                        height='160px' 
                        width='100%' 
                        loading='lazy'
                    />
                </Row>
                <Row className='text-center'>
                    <h5 className='pf fw-bold'>Episode Spotlight</h5>
                    <p className='mb-0'>
                        Lowell Baier: Codex of the Endangered Species Act
                    </p>
                    <a 
                        href='https://ibios.ubc.ca/events/the-podcast/' 
                        target='_blank' 
                        rel='noreferrer'
                    >
                        <p>Conservation Conversations<FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xs' className='ms-1' /></p>
                    </a>
                </Row>
            </Col>
        </Row>
    );
};

export default PodcastSpotlight;