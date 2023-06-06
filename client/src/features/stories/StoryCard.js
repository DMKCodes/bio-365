import { useState } from 'react';
import { NavLink } from 'react-router-dom';
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

const StoryCard = ({ story }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card 
            className='story-card' 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <CardImg 
                src={story.cardImage} 
                alt='impervious surfaces' 
                className='story-card-img' 
            />
            <div className='story-card-overlay'>
                <CardBody>
                    {isHovered ? (
                        <>
                            <CardTitle>
                                <h2 className='text-uppercase fw-bold'>
                                    {story.titleSplit[0]}<br />
                                    {story.titleSplit[1]}
                                </h2>
                            </CardTitle>
                            <CardText>{story.description}</CardText>
                            <NavLink 
                                className='nav-link' 
                                to={`/stories/${story.name}`}
                            >
                                <Button
                                    type='button'
                                    color='success'
                                    className='rounded-0 btn-sm story-card-btn'
                                >
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </Button>
                            </NavLink>
                        </>
                    ) : (
                        <CardTitle>
                            <h2 className='text-uppercase fw-bold'>
                                {story.titleSplit[0]}<br />
                                {story.titleSplit[1]}
                            </h2>
                        </CardTitle>
                    )}
                </CardBody>
            </div>
        </Card>
    );
};

export default StoryCard;