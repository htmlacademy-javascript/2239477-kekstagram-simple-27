function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || min > max) {
    return NaN;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInt();

function checkMaxLengthStr(str, maxLength) {
  if (str.length <= maxLength) {
    return true;
  }
  return false;
}
checkMaxLengthStr();
