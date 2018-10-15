import React, { Component } from 'react';
import styled from 'styled-components';

class ReallarySlider extends Component {
  componentDidMount() {
    this.transtion = setInterval(() => {
      this.props.nextFunction();
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.transition);
  }

  render() {
    let bgSize;
    let Height;
    let backgroundPicture = this.props.source[this.props.currentItem].src;
    if (this.props.windowWidth >= 900) {
      bgSize = 'cover';
      Height = this.props.height;
    } else {
      bgSize = `cover`;
      Height = 0.3 * this.props.windowHeight + 'px';
    }
    const Div = styled.div`
      background-image: url(${backgroundPicture});
      background-size: ${bgSize};
      background-repeat: no-repeat;
      background-position: center center;
      width: 100%;
      height: ${Height};
      transition: ease-in-out 1s;
    `;

    return <Div>{this.props.child}</Div>;
  }
}

export default ReallarySlider;
