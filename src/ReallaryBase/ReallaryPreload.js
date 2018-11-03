import axios from 'axios';

const ReallaryPreload = (function preload() {
  function preloadImageAssets(content) {
    content.map(function(item) {
      if (item) {
        axios
          .get(item.src)
          .then(function(response) {
            const contentType = response.headers['content-type'];
            console.log(response.data);
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        console.error(item, 'is undefined');
        return false;
      }
    });
  }

  function loadVideoAssets() {}

  return {
    preloadImageAssets,
    loadVideoAssets
  };
})();

export default ReallaryPreload;
