import React, { Component } from 'react';
import ReallaryBasePlayer from './ReallaryBase/ReallaryBasePlayer';
import data from './data';
import ReallaryPreload from '../src/ReallaryBase/ReallaryPreload';

class App extends Component {
  render() {
    return (
      <div>
        <ReallaryBasePlayer source={this.props.data} mediaType="slider" height="480px" />
        {/* <ReallaryBasePlayer source={data.photos} mediaType="photo" width={'900px'} height="600px" /> */}
        {/* <ReallaryBasePlayer source={data.videos} mediaType="video" width={'900px'} height="600px" /> */}
        hi
      </div>
    );
  }
}

export default App;
