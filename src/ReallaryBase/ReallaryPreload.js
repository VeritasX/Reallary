const ReallaryPreload = (function preload() {
  async function preloadImageAssets(content, param) {
    var oldData = [];

    function getStore(oldData, content) {
      const newDataPromise = new Promise((resolve, reject) => {
        if (oldData.length === content.length) {
          resolve(oldData);
        }
      });

      newDataPromise.then(data => console.log('I did it ', oldData)).catch(err => console.log(err));

      //const checkData = setInterval(function(){console.log(newDataPromise)}, 1000)
    }

    function sortAndStoreData(data, iterator) {
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

        oldData.push(returnedData);
      };

      newImage.src = data.src;
      returnedData.fileType =
        'image/' +
        data.src.split('.').filter(function(item) {
          if (item === 'jpg' || item === 'png') {
            return item;
          }
        })[0];
      return oldData;
    }

    var same = content.map(async function(item, i) {
      var data = await sortAndStoreData(item, i);
      return data;
    });

    //getStore(same, content);

    return same;
  }

  async function checkData(data) {
    let newData;
    if (Array.isArray(data)) {
      newData = await JSON.stringify(data);
    }

    return await newData;
  }

  return {
    preloadImageAssets,
    checkData
  };
})();

export default ReallaryPreload;
