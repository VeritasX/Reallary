import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ReallaryBasePlayer.css';

export default class ReallaryBasePlayer extends Component {
  constructor() {
    super();
    this.state = {
      source: this.props.source,
      mediaType: this.props.mediaType,
      currentItem: 0
    };

    this.isVideo = this.isVideo.bind(this);
    this.isSlider = this.isSlider.bind(this);
    this.isGallery = this.isGallery.bind(this);
    this.changeSource = this.changeSource.bind(this);
    this.generateThumbnails = this.generateThumbnails.bind(this);
    this.checkMediaType = this.checkMediaType.bind(this);
  }

  isVideo(currentItem) {
    //return the Video Component
  }

  isSlider(currentItem) {
    //return the Slider Component
  }

  isGallery(currentItem) {
    // return the Photo Gallery Component
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
    return <div className="main-player" />;
  }
}

ReallaryBasePlayer.PropTypes = {
  source: PropTypes.array,
  mediaType: PropTypes.string
};
