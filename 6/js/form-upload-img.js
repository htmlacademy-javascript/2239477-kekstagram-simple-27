import { isEscapeKey } from './util.js';
import { scaleValue, imgPreview, scaleValueTetx } from './elements.js';
import { getCheckLengthStr } from './get-check-length-str.js';

const fileInput = document.querySelector('.img-upload__input');
const popupImg = document.querySelector('.img-upload__overlay');
const btnHidePopup = document.querySelector('#upload-cancel');
const textDescription = document.querySelector('.text__description');
const form = document.getElementById('upload-select-image');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closePopup();
  }
};

const onPopupDocument = (evt) => {
  if (evt.target === popupImg) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closePopup();
  }
};

const closePopup = () => {
  document.body.classList.remove('modal-open');
  popupImg.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', onPopupDocument);

  textDescription.value = '';
  fileInput.value = '';
  scaleValue.value = scaleValueTetx;
  imgPreview.style.transform = '';
};


const openPopup = () => {
  popupImg.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onPopupDocument);
};

fileInput.addEventListener('change', (evt) => {
  evt.preventDefault();

  // eslint-disable-next-line no-use-before-define
  openPopup();
});

form.addEventListener('submit', (evt) => {
  const comment = textDescription.value;
  if (getCheckLengthStr(comment, 19) || !getCheckLengthStr(comment, 140)) {
    evt.preventDefault();
    const mistake = document.createElement('p');
    mistake.textContent = 'Комментарий должен быть от 20 до 140 символов';
    mistake.style.color = 'red';
    document.querySelector('.img-upload__text').insertBefore(mistake, textDescription);
  }
});

btnHidePopup.addEventListener('click', (evt) => {
  evt.preventDefault();
  closePopup();
});
