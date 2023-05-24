import { Row, Col } from 'reactstrap';

const PodcastSpotlight = () => {
    return (
        <>
            <Row>
                <iframe 
                    width='50%' 
                    height='300' 
                    src='https://embeds.audioboom.com/posts/8239418/embed/hero' 
                    style={{ 
                        backgroundColor: 'transparent', 
                        display: 'block', 
                        padding: 0, 
                        width: '100%', 
                        maxWidth: '700px' 
                    }} 
                    frameborder='0' 
                    allowtransparency='allowtransparency'
                    title='Audioboom player' 
                    allow='autoplay'
                    sandbox='allow-downloads allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation'
                />
            </Row>
        </>
    )
};

export default PodcastSpotlight;