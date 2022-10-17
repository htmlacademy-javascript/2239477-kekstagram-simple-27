import {getRandomInt} from './get-random-int.js';

const getRandomString = (str) => str.substr(0, getRandomInt(1, 10));

export {getRandomString};
