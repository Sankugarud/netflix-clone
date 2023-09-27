import React from 'react';
import YouTube from 'react-youtube';


const Youtube = () => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
        },
      };
      _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
      return (
      
        <YouTube videoId="XtMThy8QKqU" opts={opts} onReady={_onReady} />
    
      )
}

export default Youtube