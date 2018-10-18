import React, { Component } from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './ReallarySlider.css';

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
    `;

    return (
      <TransitionGroup component={Div}>
        <CSSTransition classNames="sliders" timeout={{ enter: 100, exit: 100 }}>
          <Div />
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default ReallarySlider;
