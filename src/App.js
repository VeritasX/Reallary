import React, { Component } from 'react';
import ReallaryBasePlayer from './ReallaryBase/ReallaryBasePlayer';
import data from './data';

class App extends Component {
  render() {
    return (
      <div>
        <ReallaryBasePlayer source={data.photos} mediaType="slider" height="480px" />
        <ReallaryBasePlayer source={data.photos} mediaType="photo" width={'900px'} height="600px" />
        <ReallaryBasePlayer source={data.videos} mediaType="video" width={'900px'} height="600px" />
      </div>
    );
  }
}

export default App;
