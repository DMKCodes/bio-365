import { Row, Col } from 'reactstrap';
import PodcastCard from './PodcastCard';
import { PODCASTS } from '../../../../app/shared/PODCASTS';

const PodcastList = () => {
    return (
        <Row>
            {PODCASTS.map((podcast, index) => {
                return (
                    <Col md='2' key={index} className='text-center fs-6'>
                        <PodcastCard podcast={podcast} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default PodcastList;