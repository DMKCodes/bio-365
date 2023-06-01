import { Row, Col } from 'reactstrap';

const PodcastSpotlight = () => {
    return (
        <Row className='d-flex justify-content-center'>
            <Col md='7'>
                <Row className='px-3'>
                    <iframe
                        title='Spotify Embed'
                        src='https://open.spotify.com/embed/episode/5AZgvUM0xCgtOnLOKVWaUM?utm_source=generator&theme=0&t=0'
                        height='250'
                        allow='autoplay; clipboard-write; encrypted-media; picture-in-picture'
                        loading='lazy'
                    />
                </Row>
                <Row className='text-center mb-4'>
                    <h5 className='text-uppercase'>Episode Spotlight</h5>
                    <p className='mb-0'>
                        An Economics Approach to Human-Wildlife Conflict
                    </p>
                    <a 
                        href='https://ibios.ubc.ca/events/the-podcast/' 
                        target='_blank' 
                        rel='noreferrer'
                    >
                        <p>Biodiversity Speaks</p>
                    </a>
                </Row>
            </Col>
        </Row>
    );
};

export default PodcastSpotlight;