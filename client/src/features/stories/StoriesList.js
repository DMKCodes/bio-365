import { Row, Col } from 'reactstrap';
import StoryCard from './StoryCard';
import { STORIES } from '../../app/shared/STORIES';

const StoriesList = () => {
    return (
        <Row className='mt-lg-5 mb-5 d-flex justify-content-center'>
            {STORIES.map((story, index) => {
                return (
                    <Col lg='4' md='6' key={index}>
                        <StoryCard 
                            story={story}
                        />
                    </Col>
                );
            })}
        </Row>
    );
};

export default StoriesList;