import React from 'react';
import VideoItem from './VideoItem';
            //    props.videos
const VideoList = ( {videos, onVideoSelect}) => {
                //videos(with s) is an array store list of videos,
                //video(no s) is a each element of videos[].
    const renderedList = videos.map( (video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>;
    })

    return <div className="ui relaxed divided list"> {renderedList}</div>

};

export default VideoList;