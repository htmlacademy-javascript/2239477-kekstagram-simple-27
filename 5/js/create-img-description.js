import {getRandomInt} from './get-random-int.js';
import {getRandomString} from './get-random-string.js';

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

export {getObjectDescription};
