import { useState, useRef } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

const VideoBackground = ({ video }) => {
    const [isPaused, setIsPaused] = useState(false);

    const videoRef = useRef(null);

    const handlePause = () => {
        if (videoRef.current && isPaused === false) {
            setIsPaused(true);
            videoRef.current.pause();
        }
    };

    const handlePlay = () => {
        if (videoRef.current && isPaused === true) {
            setIsPaused(false);
            videoRef.current.play();
        }
    };

    return (
        <div className='video-background'>
            <video ref={videoRef} playsInline autoPlay muted loop>
                <source src={video.video} type='video/mp4' />
            </video>
            <div className='video-overlay'>
                <h1 className='video-overlay-header mt-5 mb-3 text-center'>
                    {video.title}
                </h1>
                {video.content.map((content, index) => {
                    return (
                        <h5 key={index} className='video-overlay-body text-center mb-3'>
                            {content}
                        </h5>
                    );
                })}
            </div>
            {!isPaused ? (
                <Button
                    outline
                    color='secondary'
                    className='video-background-btn btn-sm rounded-0 mb-3 me-4'
                    onClick={() => handlePause()}
                >
                    <FontAwesomeIcon icon={faPause} className='me-2' />
                    Pause
                </Button>
            ) : (
                <Button
                    outline
                    color='secondary'
                    className='video-background-btn btn-sm rounded-0 mb-3 me-4'
                    onClick={() => handlePlay()}
                >
                    <FontAwesomeIcon icon={faPlay} className='me-2' />
                    Play
                </Button>
            )}
        </div>
    );
};

export default VideoBackground;