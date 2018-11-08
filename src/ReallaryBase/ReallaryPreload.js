const ReallaryPreload = (function preload() {
  function preloadImageAssets(content, store, param) {
    var oldData = [];
    function sortAndStoreData(data) {
      let returnedData = {
        fileType: null,
        src: null,
        preLoadKey: data.preLoadKey,
        altText: data.altText
      };
      const newImage = new Image();

      newImage.onload = function() {
        const newCanvas = document.createElement('canvas');
        newCanvas.width = newImage.width;
        newCanvas.height = newImage.height;
        const context = newCanvas.getContext('2d');
        context.drawImage(newImage, 0, 0);

        const dataUrl = context.canvas.toDataURL();

        returnedData.src = dataUrl;

        console.log(oldData);
        oldData.push(returnedData);
        store[param] = oldData;
        console.log(store[param]);
      };

      newImage.src = data.src;
      returnedData.fileType =
        'image/' +
        data.src.split('.').filter(function(item) {
          if (item === 'jpg' || item === 'png') {
            return item;
          }
        })[0];
    }

    content.map(function(item) {
      sortAndStoreData(item);
    });

    return oldData;
  }

  return {
    preloadImageAssets
  };
})();

export default ReallaryPreload;
