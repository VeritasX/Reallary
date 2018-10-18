import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ReallaryBasePlayer.css';
import '../ReallarySlider/ReallarySlider';
import ReallarySlider from '../ReallarySlider/ReallarySlider';

class ReallaryBasePlayer extends Component {
  constructor(props) {
    super();
    this.state = {
      source: props.source,
      mediaType: props.mediaType,
      currentItem: 0,
      windowWidth: 0,
      windowHeight: 0,
      height: props.height
    };

    this.isVideo = this.isVideo.bind(this);
    this.isSlider = this.isSlider.bind(this);
    this.isGallery = this.isGallery.bind(this);
    this.changeSource = this.changeSource.bind(this);
    this.generateThumbnails = this.generateThumbnails.bind(this);
    this.checkMediaType = this.checkMediaType.bind(this);
    this.resizeHandler = this.resizeHandler.bind(this);
    this.goToTheNextItem = this.goToTheNextItem.bind(this);
  }

  resizeHandler() {
    this.setState({
      windowWidth: window.innerWidth
    });
    this.setState({
      windowHeight: window.innerHeight
    });
  }
  componentDidMount() {
    this.resizeHandler();
    window.addEventListener('resize', this.resizeHandler.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler.bind(this));
  }

  goToTheNextItem() {
    const newItem = this.state.currentItem + 1;
    const lengthOfData = this.state.source.length - 1;
    if (newItem <= lengthOfData) {
      this.setState({
        currentItem: newItem
      });
    } else {
      this.setState({
        currentItem: 0
      });
    }
  }

  isVideo(currentItem, source, thumbnails) {
    //return the Video Component wrapped with the thumbnail component
  }

  isSlider(currentItem, source) {
    return (
      <ReallarySlider
        source={this.state.source}
        currentItem={this.state.currentItem}
        height={this.state.height}
        windowWidth={this.state.windowWidth}
        windowHeight={this.state.windowHeight}
        nextFunction={this.goToTheNextItem}
        child={this.props.child}
      />
    );
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
      return this.isSlider(this.state.currentItem, this.state.source);
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
  thumbnails: PropTypes.array,
  height: PropTypes.string.isRequired,
  child: PropTypes.node
};

export default ReallaryBasePlayer;
