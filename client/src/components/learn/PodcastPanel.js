import { Row, Col } from 'reactstrap';
import PodcastSpotlight from './PodcastSpotlight';
import { PODCASTS } from '../../datasets/podcasts';

const PodcastPanel = () => {
    
    return (
        <Row>
            <Col md='6'>
                <PodcastSpotlight />
            </Col>
            {PODCASTS.map((podcast, idx) => {
                return (
                    <Col md='2' key={idx} className='text-center fs-6'>
                        <img src={podcast.image} alt='podcast logo' className='podcast-img' />
                        <a 
                            href={podcast.link} 
                            target='_blank' 
                            rel='noreferrer'
                        >
                            <h5 className='mt-2'>{podcast.name}</h5>
                        </a>
                        <p>{podcast.description}</p>
                    </Col>
                );
            })}
        </Row>
    );
};

export default PodcastPanel;