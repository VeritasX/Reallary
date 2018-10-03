import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ReallaryBasePlayer.css';

class ReallaryBasePlayer extends Component {
  constructor(props) {
    super();
    this.state = {
      source: props.source,
      mediaType: props.mediaType,
      currentItem: 0
    };

    this.isVideo = this.isVideo.bind(this);
    this.isSlider = this.isSlider.bind(this);
    this.isGallery = this.isGallery.bind(this);
    this.changeSource = this.changeSource.bind(this);
    this.generateThumbnails = this.generateThumbnails.bind(this);
    this.checkMediaType = this.checkMediaType.bind(this);
  }

  isVideo(currentItem, source, thumbnails) {
    //return the Video Component wrapped with the thumbnail component
  }

  isSlider(currentItem, source) {
    //return the Slider Component
  }

  isGallery(currentItem, source, thumbnails) {
    // return the Photo Gallery Component wrapped with the thumbnail component
  }

  changeSource() {
    //change the source number of the component
  }

  generateThumbnails() {
    //generate the thumbnails for the videos or PhotoGallery
  }

  checkMediaType() {
    if (this.state.mediaType === 'video') {
      return this.isVideo(this.state.currentItem);
    } else if (this.state.mediaType === 'photo') {
      return this.isGallery(this.state.currentItem);
    } else if (this.state.mediaType === 'slider') {
      return this.isSlider(this.state.currentItem);
    } else {
      console.error(
        'Please add a media type to your component, the following media type flags can be used: "video", "photo", "slider"'
      );
    }
  }

  render() {
    return <div className="main-player">{this.checkMediaType()}</div>;
  }
}

ReallaryBasePlayer.propTypes = {
  source: PropTypes.array.isRequired,
  mediaType: PropTypes.string.isRequired,
  thumbnails: PropTypes.array
};

export default ReallaryBasePlayer;
