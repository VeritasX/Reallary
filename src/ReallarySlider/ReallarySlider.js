import React from 'react';
import styled from 'styled-components';

const ReallarySlider = props => {
  let bgSize;
  let backgroundPicture = props.source[props.currentItem].src;
  if (props.windowSize >= 900) {
    bgSize = 'cover';
  } else {
    bgSize = '100%';
  }
  const Div = styled.div`
    background-image: url(${backgroundPicture});
    background-size: ${bgSize};
    background-repeat: no-repeat;
    width: 100%;
    height: ${props.height};
  `;

  return <Div />;
};

export default ReallarySlider;
