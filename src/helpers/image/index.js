export const getImageDimensions = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => resolve({width: img.width, height: img.height});
    img.onerror = (error) => reject(error);
    img.src = url;
  });
};
