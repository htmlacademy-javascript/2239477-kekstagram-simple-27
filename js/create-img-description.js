import {getRandomInt} from './get-random-int.js';
import {getRandomString} from './get-random-string.js';
import {LIKES_MIN, ATTRIBUTES_MAX_VALUE} from './const.js';

const getObjectDescription = (num) => {
  const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

  const attributesImg = {
    'id': num,
    'url': `photos/${num}.jpg`,
    'description': getRandomString(string),
    'likes': getRandomInt(LIKES_MIN, ATTRIBUTES_MAX_VALUE),
    'comments': getRandomInt(0, ATTRIBUTES_MAX_VALUE)
  };
  return attributesImg;
};

export {getObjectDescription};
