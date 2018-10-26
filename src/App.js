import React, { Component } from 'react';
import ReallaryBasePlayer from './ReallaryBase/ReallaryBasePlayer';
import data from './data';

class App extends Component {
  render() {
    return (
      <div>
        <ReallaryBasePlayer source={data} mediaType="slider" height="480px" />
        <ReallaryBasePlayer source={data} mediaType="photo" width={'900px'} height="600px" />
      </div>
    );
  }
}

export default App;
