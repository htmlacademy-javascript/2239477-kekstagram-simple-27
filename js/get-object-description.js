import {getObjectDescription} from './create-img-description.js';
import {MAX_OBJ_COUNT} from './const.js';

function getArr(arrLenght, arrValue) {
  const images = [];

  for (let i = 1; i <= arrLenght; i++) {
    images.push(arrValue(i));
  }

  return images;
}

const photos = getArr(MAX_OBJ_COUNT, getObjectDescription);

export {photos};
