import React, { Component } from 'react';

import { FaPlay, FaPause, FaStop } from 'react-icons/fa';

class ReallaryVideo extends Component {
  render() {
    let VideoRef = React.createRef();

    const playVideo = () => {
      VideoRef.current.play();
    };

    const pauseVideo = () => {
      VideoRef.current.pause();
    };

    const stopVideo = () => {
      VideoRef.current.currentTime = 0;
      VideoRef.current.pause();
    };

    const thumbnails = () => {
      if (this.props.thumbnails) {
        return <div className="reallary-thumbnails-video">{this.props.thumbnails}</div>;
      }
    };

    const menu = () => {
      return (
        <div className="video-menu">
          <button className="video-menu-button" onClick={playVideo}>
            <FaPlay />
          </button>
          <button className="video-menu-button" onClick={pauseVideo}>
            <FaPause />
          </button>
          <button className="video-menu-button" onClick={stopVideo}>
            <FaStop />
          </button>
        </div>
      );
    };

    const newVideo = () => {
      return <video className="video-tag" ref={VideoRef} src={this.props.source[this.props.currentItem].src} />;
    };

    return (
      <div className="reallary-picture-gallery">
        {newVideo()}
        {menu()}
        {thumbnails()}
      </div>
    );
  }
}

export default ReallaryVideo;
