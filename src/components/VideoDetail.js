import React from 'react';

const VideoDetail = ({ video }) => {
    if(!video) {
        return <div> Loading...</div>;
    }

    //Video link, every video has its videoId
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return ( 
        <div>
            <div className ="ui embed">
                <iframe title="video-player" src={videoSrc} />
            </div>
                <div className="ui segment"> 
                    <h4 className="ui header">{video.snippet.title} </h4> 
                    <p> {video.snippet.description}</p>
                    <h3> {video.snippet.channelTitle}</h3>
                </div> 
            
        </div>
    );

}

export default VideoDetail;