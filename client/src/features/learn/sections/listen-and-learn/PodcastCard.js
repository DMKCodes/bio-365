import { useState } from 'react';
import { 
    Card, 
    CardImg, 
    CardBody,
    CardText, 
    Button 
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const PodcastCard = ({ podcast }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card 
            className='podcast-card position-relative text-center rounded-0 mb-3 mb-xxl-0' 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <CardImg 
                src={podcast.image} 
                alt='impervious surfaces' 
                className='podcast-card-img rounded-0' 
            />
            <div className='podcast-card-overlay rounded-0 d-flex align-items-center'>
                <CardBody className='p-1 px-2'>
                    {isHovered &&
                        <>
                            <CardText>
                                <small>{podcast.description}</small>
                            </CardText>
                            <Button
                                type='link'
                                href={podcast.link}
                                target='_blank'
                                rel='noreferrer noopener'
                                color='success'
                                className='rounded-0 btn-sm podcast-card-btn'
                            >
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Button>
                        </>
                    }
                </CardBody>
            </div>
        </Card>
    );
};

export default PodcastCard;