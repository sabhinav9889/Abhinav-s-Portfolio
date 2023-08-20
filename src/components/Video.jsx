import React from 'react';
import source from '../assets/mixkit-stars-in-space-background-1610-4k.mp4';
import './Video.css'    
const Video = () => {
    return (
        <video  autoPlay loop muted className='vdo'>
            <source src={source} type='video/mp4'/>
        </video>
    );
  };
  
  export default Video;  