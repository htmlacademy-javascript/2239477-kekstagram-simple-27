/* eslint-disable no-unused-vars */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || max < 0 || typeof min !== 'number' || typeof max !== 'number') {
    return NaN;
  } else if (min > max) {
    const newMax = min;
    min = max;
    max = newMax;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getCheckLengthStr = (str, lengthStr) => str.length <= lengthStr;

getCheckLengthStr();

const getRandomString = (str) => str.substr(0, getRandomInt(1, 10));

const getObjectDescription = (num) => {
  const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

  const attributesImg = {
    'id': num,
    'url': `photos/${num}.jpg`,
    'description': getRandomString(string),
    'likes': getRandomInt(15, 200),
    'comments': getRandomInt(0, 200)
  };
  return attributesImg;
};

function getArr(arrLenght, arrValue) {
  const images = [];

  for (let i = 1; i <= arrLenght; i++) {
    images.push(arrValue(i));
  }

  return images;
}

const objects = getArr(25, getObjectDescription);
