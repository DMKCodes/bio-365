import { Row, Col } from 'reactstrap';
import { PODCASTS } from '../../../../app/shared/PODCASTS';

const PodcastList = () => {
    return (
        <Row>
            {PODCASTS.map((podcast, idx) => {
                return (
                    <Col md='2' key={idx} className='text-center fs-6'>
                        <a
                            href={podcast.link}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img 
                                src={podcast.image} 
                                alt='podcast logo' 
                                className='podcast-img' 
                            />
                        </a>
                        <p className='mt-2'>{podcast.description}</p>
                    </Col>
                );
            })}
        </Row>
    );
};

export default PodcastList;