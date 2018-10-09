import React from 'react';
import styled from 'styled-components';

const ReallarySlider = props => {
  let bgSize;
  let Height;
  let backgroundPicture = props.source[props.currentItem].src;
  if (props.windowWidth >= 900) {
    bgSize = 'cover';
    Height = props.height;
  } else {
    bgSize = `cover`;
    Height = 0.3 * props.windowHeight + 'px';
  }
  const Div = styled.div`
    background-image: url(${backgroundPicture});
    background-size: ${bgSize};
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: ${Height};
  `;

  return <Div />;
};

export default ReallarySlider;
