import { Row } from 'reactstrap';

const PodcastSpotlight = () => {
    return (
        <>
            <Row className='px-3'>
                <iframe 
                    width='50%' 
                    height='300' 
                    src='https://embeds.audioboom.com/posts/8239418/embed/hero' 
                    frameborder='0' 
                    allowtransparency='allowtransparency'
                    title='Audioboom player' 
                    allow='autoplay'
                    sandbox='allow-downloads allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation'
                />
            </Row>
            <Row className='text-center'>
                <h5>EPISODE SPOTLIGHT</h5>
                <p className='mb-0'>2022 Highlights: Inspiration and Inclusion in Conservation</p>
                <a 
                    href='https://audioboom.com/channels/5029774-conservation-conversations-with-sean-o-brien' 
                    target='_blank' 
                    rel='noreferrer'
                >
                    <p>Conservation Conversations with Sean O'Brien</p>
                </a>
            </Row>
        </>
    )
};

export default PodcastSpotlight;