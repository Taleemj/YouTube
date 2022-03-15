import React from 'react';



const VideoDetail = ({ selectedVideo }) => {
    const videoembed = selectedVideo?.id?.videoId
    const videoSrc = `https://www.youtube.com/embed/${videoembed}`
    return (
        <div className='videodetails'>
            <div className='videoselect'>
                <iframe frameBorder='0' height='100%' width='100%' title='video player'  src={videoSrc} />
            </div>
            <div className='description'>
                <h2>{selectedVideo?.snippet?.title}</h2>
                <h3>{selectedVideo?.snippet?.channelTitle}</h3>
                <h5>{selectedVideo?.snippet?.description}</h5>
            </div>
        </div>
    )
}

export default VideoDetail
