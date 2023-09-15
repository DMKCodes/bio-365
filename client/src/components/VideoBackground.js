const VideoBackground = ({ video }) => {
    return (
        <div className='video-background'>
            <video playsInline autoPlay muted loop>
                <source src={video.video} type='video/mp4' />
            </video>
            <div className='video-overlay'>
                <h1 className='video-overlay-header mt-5 mb-3 fw-bold'>
                    {video.title}
                </h1>
                {video.content.map((content, index) => {
                    return (
                        <h5 key={index} className='video-overlay-body text-center mb-4'>
                            {content}
                        </h5>
                    );
                })}
                {video.author &&
                    <h5 className='video-overlay-body text-center'>
                        Created by {video.author}
                    </h5>
                }
            </div>
        </div>
    );
};

export default VideoBackground;