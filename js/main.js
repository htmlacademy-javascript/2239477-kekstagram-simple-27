function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || typeof min !== 'number' || typeof max !== 'number') {
    return NaN;
  } else if (min > max) {
    const newMax = min;
    min = max;
    max = newMax;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const checkLengthStr = (str, lengthStr) => str.length <= lengthStr;

checkLengthStr();

const createsObject = (num) => {
  const attributesImg = {
    'id': num,
    'url': `photos/${num}.jpg`,
    'description': `Фото - ${num}`,
    'likes': getRandomInt(15, 200),
    'comments': getRandomInt(0, 200)
  };
  return attributesImg;
};

const images = [];

function arrPush(numMin, numMax, arr, arrValue) {
  for (let i = numMin; i <= numMax; i++) {
    arr.push(arrValue(i));
  }
}

arrPush(1, 25, images, createsObject);
