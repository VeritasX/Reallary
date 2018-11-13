import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import data from './data';
import ReallaryPreload from './ReallaryBase/ReallaryPreload';

let bob = ReallaryPreload.preloadImageAssets(data.photos, 'slider');
bob = new Promise((resolve, reject) => {
  resolve(bob);
})
  .then(function(res) {
    if (typeof res === 'object') {
      return res;
    }
  })
  .then(async function(value) {
    return await value[0];
  })
  .then(function(value2) {
    bob = value2;
    console.log(value2);
    return value2;
  });

//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
