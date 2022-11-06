import './scale-img.js';
import './img-effect.js';
import './slider-intensity-effect.js';
import { getData } from './server.js';
import { closePopup } from './form-upload-img.js';
import { setPhotoFormSubmit } from './submitting-form.js';
import { getListContent } from './miniatures-rendering.js';

getData((photo) => {
  getListContent(photo);
});

setPhotoFormSubmit(closePopup);
