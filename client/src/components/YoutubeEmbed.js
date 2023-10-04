const YoutubeEmbed = ({ id }) => {
    return (
        <div className='responsive-video w-100'>
            <iframe
                src={`https://www.youtube.com/embed/${id}`}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title='Embedded youtube'
            />
        </div>
    );
};

export default YoutubeEmbed;