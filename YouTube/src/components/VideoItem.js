import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div>
            <div>
                <div className='videoitem'  onClick = {()=> onVideoSelect(video)}>
                    <img alt='thumbnail' src={video.snippet.thumbnails.medium.url}/>
                    <h5><b>{video.snippet.title}</b></h5>
                </div>
            </div>
        </div>
  )
};

export default VideoItem;
