import React, { Component } from 'react';
import ReallaryBasePlayer from './ReallaryBase/ReallaryBasePlayer';
import data from './data';
import ReallaryPreload from '../src/ReallaryBase/ReallaryPreload';

class App extends Component {
  render() {
    let store = {};
    function LocalData() {
      ReallaryPreload.preloadImageAssets(data.photos, store, 'slider');

      const dataTimer = setInterval(function() {
        if (store['slider'].length === data.photos.length) {
          clearInterval(dataTimer);
          //localStorage.setItem('sliderData', JSON.stringify(store['slider']));
          console.log(store);
        }
      }, 1000);
    }

    LocalData();

    return (
      <div>
        <ReallaryBasePlayer source={store.slider || []} mediaType="slider" height="480px" />
        {/* <ReallaryBasePlayer source={data.photos} mediaType="photo" width={'900px'} height="600px" /> */}
        {/* <ReallaryBasePlayer source={data.videos} mediaType="video" width={'900px'} height="600px" /> */}
        hi
      </div>
    );
  }
}

export default App;
