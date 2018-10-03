import React, { Component } from 'react';
import ReallaryBasePlayer from './ReallaryBase/ReallaryBasePlayer';
import data from './data';

class App extends Component {
  render() {
    return (
      <div>
        <ReallaryBasePlayer source={data} mediaType="slider" />
      </div>
    );
  }
}

export default App;
