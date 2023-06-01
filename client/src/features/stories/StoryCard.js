import { useState } from 'react';
import { 
    Card, 
    CardImg, 
    CardBody, 
    CardTitle, 
    CardText, 
    Button 
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const StoryCard = ({ story, setCollapsed, setActiveStory }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card 
            className='story-card' 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <CardImg src={story.image} alt='impervious surfaces' className='story-card-img' />
            <div className='story-card-overlay'>
                <CardBody>
                    {isHovered ? (
                        <>
                            <CardTitle>
                                <h2 className='text-uppercase fw-bold'>
                                    {story.title[0]}<br />
                                    {story.title[1]}
                                </h2>
                            </CardTitle>
                            <CardText>{story.description}</CardText>
                            <Button
                                type='button'
                                color='success'
                                onClick={() => {
                                    setActiveStory(story);
                                    setCollapsed(true);
                                }}
                                className='rounded-0 btn-sm story-card-btn'
                            >
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Button>
                        </>
                    ) : (
                        <CardTitle>
                            <h2 className='text-uppercase fw-bold'>
                                {story.title[0]}<br />
                                {story.title[1]}
                            </h2>
                        </CardTitle>
                    )}
                </CardBody>
            </div>
        </Card>
    );
};

export default StoryCard;