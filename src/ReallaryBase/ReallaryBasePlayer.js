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
  }

  isVideo(source, altText) {
    //return the Video Component
  }

  isSlider() {
    //return the Slider Component
  }

  isGallery() {
    // return the Photo Gallery Component
  }

  changeSource() {
    //change the source number of the component
  }

  generateThumbnails() {
    //generate the thumbnails for the videos or PhotoGallery
  }

  checkMediaType() {
    //Check the media type and return the required component
  }

  render() {
    return <div className="main-player" />;
  }
}

ReallaryBasePlayer.PropTypes = {
  source: PropTypes.array,
  mediaType: PropTypes.string
};
