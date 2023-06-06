import bgvid from '../../app/media/learnpagevideo.mp4';

const LearnVideoBackground = () => {
    return (
        <div className='video-background'>
            <video playsInline autoPlay muted loop>
                <source src={bgvid} type='video/mp4' />
            </video>
            <div className='video-overlay'>
                <h1 className='video-overlay-header'>WHAT IS BIODIVERSITY?</h1>
                <p className='video-overlay-body'>
                    Biodiversity is the term we use to describe all the different kinds of life on Earth—the variety of animals, plants, fungi, and even microorganisms like bacteria that make up our natural world. These species work together in ecosystems, like an intricate web, to maintain balance and support life.
                </p>
            </div>
        </div>
    );
};

export default LearnVideoBackground;