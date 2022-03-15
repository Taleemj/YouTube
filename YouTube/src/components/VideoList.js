import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos , onVideoSelect}) => {
    const ListOfVideos = videos.map((video, id) => <VideoItem key={id} video={video} onVideoSelect={onVideoSelect}/>)
  return(
    <div className='videolist'> 
        {ListOfVideos}
    </div>
  )
};

export default VideoList;
