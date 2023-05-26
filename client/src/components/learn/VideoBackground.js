import bgvid from '../../app/media/learnpagevideo.mp4';

const VideoBackground = () => {
    return (
        <div className='video-background'>
            <video playsInline autoPlay muted loop>
                <source src={bgvid} type='video/mp4' />
            </video>
            <div className='video-overlay'>
                <h2 className='video-overlay-header'>WHAT IS BIODIVERSITY?</h2>
                <p className='video-overlay-body'>
                    Biodiversity is the term we use to describe all the different kinds of life you can find in one area—the variety of animals, plants, fungi, and even microorganisms like bacteria that make up our natural world. Each of these species and organisms work together in ecosystems, like an intricate web, to maintain balance and support life.
                </p>
            </div>
        </div>
    );
};

export default VideoBackground;