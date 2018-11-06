const ReallaryPreload = (function preload() {
  function preloadImageAssets(content) {
    function sortAndStoreData(data) {
      let returnedData = {
        fileType: null,
        src: null,
        preLoadKey: data.preLoadKey,
        altText: data.altText
      };

      const newImage = new Image();
      newImage.src = data.src;
      returnedData.fileType =
        'image/' +
        data.src.split('.').filter(function(item) {
          if (item === 'jpg' || item === 'png') {
            return item;
          }
        })[0];

      const newCanvas = document.createElement('canvas');
      newCanvas.width = newImage.width;
      newCanvas.height = newImage.height;
      const context = newCanvas.getContext('2d');
      context.drawImage(newImage, 0, 0);
      const dataUrl = newCanvas.toDataURL(returnedData.fileType);
      returnedData.src = dataUrl.replace(/^data:image\/(png|jpg);base64,/, '');

      return returnedData;
    }

    function checkIfDataIsStored(data) {}
    let PictureData = content.map(function(item) {
      let content = sortAndStoreData(item);
      console.log(content);
      return content;
    });

    localStorage.setItem('PictureData', JSON.stringify(PictureData));
  }

  function loadVideoAssets() {}

  return {
    preloadImageAssets,
    loadVideoAssets
  };
})();

export default ReallaryPreload;
