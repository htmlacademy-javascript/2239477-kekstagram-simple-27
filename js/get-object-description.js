import {getObjectDescription} from './create-img-description.js';

function getArr(arrLenght, arrValue) {
  const images = [];

  for (let i = 1; i <= arrLenght; i++) {
    images.push(arrValue(i));
  }

  return images;
}

const objects = getArr(25, getObjectDescription);

export {objects};
