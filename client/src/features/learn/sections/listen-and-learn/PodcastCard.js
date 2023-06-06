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

const PodcastCard = ({ podcast }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card 
            className='podcast-card text-start' 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <CardImg 
                src={podcast.image} 
                alt='impervious surfaces' 
                className='podcast-card-img' 
            />
            <div className='podcast-card-overlay'>
                <CardBody>
                    {isHovered &&
                        <>
                            <CardText>
                                <small>{podcast.description}</small>
                            </CardText>
                            <a
                                href={podcast.link}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <Button
                                    type='button'
                                    color='success'
                                    className='rounded-0 btn-sm podcast-card-btn'
                                >
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </Button>
                            </a>
                        </>
                    }
                </CardBody>
            </div>
        </Card>
    );
};

export default PodcastCard;