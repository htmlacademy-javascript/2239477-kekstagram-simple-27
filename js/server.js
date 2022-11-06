import {showAlert} from './util.js';
import {URL_SERVER, URL_PHOTOS} from './const.JS';

const getData = (onSuccess) => {
  fetch(
    URL_PHOTOS,
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => response.json())
    .then((photo) => {
      onSuccess(photo);
    })
    .catch(() => {
      showAlert('Ошибка сервера');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    URL_SERVER,
    {
      method: 'POST',
      body,
      'Content-Type': 'multipart/form-data'
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData };
