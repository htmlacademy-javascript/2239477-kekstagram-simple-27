function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInt();

function checkMaxLengthStr (comment, maxLength){
  if(comment.value.length <= maxLength){
    return true;
  }
  return false;
}
checkMaxLengthStr();
