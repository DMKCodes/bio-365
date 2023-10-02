import { Row, Col } from 'reactstrap';
import PodcastCard from './PodcastCard';
import { PODCASTS } from '../../../../app/shared/PODCASTS';

const PodcastList = () => {
    return (
        <Row className='mt-5'>
            <h5 className='mb-4 text-center text-uppercase fw-bold'>Featured Podcasts</h5>
            {PODCASTS.map((podcast, index) => {
                return (
                    <Col sm='6' md='4' xxl='2' key={index} className='d-flex justify-content-center text-center fs-6'>
                        <PodcastCard podcast={podcast} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default PodcastList;