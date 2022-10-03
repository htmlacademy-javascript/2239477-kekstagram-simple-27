function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || typeof min !== 'number' || typeof max !== 'number') {
    return NaN;
  }
  if (min > max) {
    min = max;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt();

const checkLengthStr = (str, lengthStr) => str.length <= lengthStr;

checkLengthStr();
