import { Row, Col } from 'reactstrap';
import StoryCard from './StoryCard';
import { STORIES } from '../../app/shared/STORIES';

const StoriesList = () => {
    return (
        <Row>
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