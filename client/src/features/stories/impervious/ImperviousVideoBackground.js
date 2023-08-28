import bgvid from '../../../app/media/impervious-video.mp4';

const ImperviousVideoBackground = () => {
    return (
        <div className='video-background'>
            <video playsInline autoPlay muted loop>
                <source src={bgvid} type='video/mp4' />
            </video>
            <div className='video-overlay'>
                <h1 className='video-overlay-header'>IMPERVIOUS</h1>
                <h5 className='video-overlay-body text-center'>
                    How our sprawling cities lead the attack on wildlife.
                </h5>
                <p>Created by Douglas Kissack</p>
            </div>
        </div>
    );
};

export default ImperviousVideoBackground;