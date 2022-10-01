function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInt();

function checkMaxLengthStr (comment, maxLength){
    return comment.value.length <= maxLength ? true : false;
}
checkMaxLengthStr();
