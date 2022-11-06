import { isEscapeKey } from './util.js';
import { scaleValueElement, imgPreviewElement, scaleValueTetx, previewEffectsInputElement, sliderIntensityEffectElement, effectLevelValueElement, sliderContainerElement, textDescriptionElement } from './elements.js';
import { initializesSlider } from './initialize-slider.js';

const fileInputElement = document.querySelector('.img-upload__input');
const popupImgElement = document.querySelector('.img-upload__overlay');
const btnHidePopupElement = document.querySelector('#upload-cancel');

function closePopupEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePopup();
  }
}

function closePopupDocument (evt) {
  if (evt.target === popupImgElement) {
    evt.preventDefault();
    closePopup();
  }
}

function closePopup () {
  document.body.classList.remove('modal-open');
  popupImgElement.classList.add('hidden');
  document.removeEventListener('keydown', closePopupEscKeydown);
  document.removeEventListener('click', closePopupDocument);

  textDescriptionElement.value = '';
  fileInputElement.value = '';
  scaleValueElement.value = scaleValueTetx;
  imgPreviewElement.removeAttribute('class');
  imgPreviewElement.removeAttribute('style');
  effectLevelValueElement.value = '';
  sliderContainerElement.hidden = true;
  sliderIntensityEffectElement.noUiSlider.destroy();
  initializesSlider();
  previewEffectsInputElement[0].checked = true;
}

function openPopup () {
  popupImgElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', closePopupEscKeydown);
  document.addEventListener('click', closePopupDocument);
}

fileInputElement.addEventListener('change', (evt) => {
  evt.preventDefault();
  openPopup();
});

btnHidePopupElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  closePopup();
});

export { closePopup, openPopup, closePopupEscKeydown };
