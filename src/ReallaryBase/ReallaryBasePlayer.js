import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../ReallarySlider/ReallarySlider';
import ReallarySlider from '../ReallarySlider/ReallarySlider';
import ReallaryPictureGallery from '../ReallaryPictures/ReallaryPictures';
import ReallaryVideo from '../ReallaryVideo/ReallaryVideo';

class ReallaryBasePlayer extends Component {
  constructor(props) {
    super();
    this.state = {
      source: props.source,
      stored: null,
      mediaType: props.mediaType,
      currentItem: 0,
      windowWidth: 0,
      windowHeight: 0,
      height: props.height,
      width: props.width,
      thumbnails: null
    };

    this.isVideo = this.isVideo.bind(this);
    this.isSlider = this.isSlider.bind(this);
    this.isGallery = this.isGallery.bind(this);

    this.generateThumbnails = this.generateThumbnails.bind(this);
    this.checkMediaType = this.checkMediaType.bind(this);
    this.resizeHandler = this.resizeHandler.bind(this);
    this.goToTheNextItem = this.goToTheNextItem.bind(this);
    this.clickAndGoToTheNextItem = this.clickAndGoToTheNextItem.bind(this);
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

    if (!this.state.thumbnails) {
      this.setState({
        thumbnails: this.generateThumbnails()
      });
    }

    // if(!this.state.source){
    //   const store = JSON.parse(localStorage.getItem())
    // }
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

  clickAndGoToTheNextItem(itemNumber) {
    const newItem = itemNumber;
    this.setState({
      currentItem: newItem
    });
  }

  isVideo() {
    return (
      <ReallaryVideo
        source={this.state.source}
        currentItem={this.state.currentItem}
        height={this.state.height}
        width={this.state.width}
        windowWidth={this.state.windowWidth}
        windowHeight={this.state.windowHeight}
        nextFunction={this.goToTheNextItem}
        child={this.props.child}
        thumbnails={this.state.thumbnails}
      />
    );
  }

  isSlider() {
    if (this.state.source) {
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
  }

  isGallery() {
    return (
      <ReallaryPictureGallery
        source={this.state.source}
        currentItem={this.state.currentItem}
        height={this.state.height}
        width={this.state.width}
        windowWidth={this.state.windowWidth}
        windowHeight={this.state.windowHeight}
        nextFunction={this.goToTheNextItem}
        child={this.props.child}
        thumbnails={this.state.thumbnails}
      />
    );
  }

  generateThumbnails() {
    let thumbnailArray = this.state.source.map((item, i) => {
      if (item.thumbNail) {
        let ItemToReturn = item.thumbNail;
        ItemToReturn.parentNumber = i;
        return ItemToReturn;
      } else {
        return false;
      }
    });

    const Thumbnail = styled.div`
      background-image: url(${props => props.background});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      width: 100%;
      height: 100%;
      cursor: pointer;
    `;

    const check = () => {
      if (thumbnailArray) {
        if (
          thumbnailArray.every(item => {
            return item;
          })
        ) {
          return (
            <Fragment>
              {thumbnailArray.map(item => (
                <div
                  className="thumbnail"
                  key={item.key}
                  onClick={() => this.clickAndGoToTheNextItem(item.parentNumber)}
                >
                  <Thumbnail background={item.src} />
                </div>
              ))}
            </Fragment>
          );
        }
      } else {
        return false;
      }
    };

    return check();
  }

  checkMediaType() {
    if (this.state.mediaType === 'video') {
      return this.isVideo(this.state.currentItem);
    } else if (this.state.mediaType === 'photo') {
      return this.isGallery();
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
  mediaType: PropTypes.string.isRequired,
  thumbnails: PropTypes.array,
  height: PropTypes.string.isRequired,
  child: PropTypes.node,
  width: PropTypes.string
};

export default ReallaryBasePlayer;
