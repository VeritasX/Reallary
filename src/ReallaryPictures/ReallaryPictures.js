import React, { Component } from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';

class ReallaryPictureGallery extends Component {
  componentDidMount() {
    this.transtion = setInterval(() => {
      this.props.nextFunction();
    }, 20000);
  }

  componentWillUnmount() {
    clearInterval(this.transition);
  }

  render() {
    let bgSize;
    let Height;
    let Width;

    let backgroundPicture = this.props.source[this.props.currentItem].src;
    if (this.props.windowWidth >= 1000) {
      bgSize = 'cover';
      Height = this.props.height;
      Width = this.props.width;
    } else {
      bgSize = `cover`;
      Height = 0.3 * this.props.windowHeight + 'px';
      Width = '80%';
    }

    const Div = styled.div`
      background-image: url(${backgroundPicture});
      background-size: ${bgSize};
      background-repeat: no-repeat;
      background-position: center center;
      width: ${Width};
      margin: 20px auto;
      height: ${Height};
    `;

    const PosedWrap = posed(Div)({
      enter: { opacity: 1 },
      exit: { opacity: 0 }
    });
    return (
      <div className="reallary-picture-gallery">
        <PoseGroup>
          <PosedWrap key={this.props.currentItem} />
        </PoseGroup>
        <div className="reallary-thumbnails-gallery">{this.props.thumbnails()}</div>
      </div>
    );
  }
}

export default ReallaryPictureGallery;
