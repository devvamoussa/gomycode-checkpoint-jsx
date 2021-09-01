import React from 'react'; //, { Component } 
import VideoPlayer from 'react-video-js-player';
import Video from './video/P1C4.mp4';
import ImageUn from "./image/unsplash2.jpg";

const VideoSrc = () => {
    const videojs = Video;
    const poster =ImageUn;
    
    return (
        <div className="container mt-3 ml-5">
          <h1>Ma premiere video</h1>
          <VideoPlayer
          width="900"
          heigth="1000"
          src={videojs}
          poster={poster}
          />
        </div>
    );
};

export default VideoSrc;
