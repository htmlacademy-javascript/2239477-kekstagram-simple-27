const scaleValueElement = document.querySelector('.scale__control--value');
const imgPreviewElement = document.querySelector('.img-upload__preview img');
const previewEffectsInputElement = document.querySelectorAll('.effects__radio');
const imgPreviewListElement = document.querySelector('.effects__list');
const sliderIntensityEffectElement = document.querySelector('.effect-level__slider');
const sliderContainerElement = document.querySelector('.effect-level');
const effectLevelValueElement = document.querySelector('.effect-level__value');
const textDescriptionElement = document.querySelector('.text__description');

const scaleValueTetx = scaleValueElement.value;

export {
  scaleValueElement,
  imgPreviewElement,
  scaleValueTetx,
  previewEffectsInputElement,
  imgPreviewListElement,
  sliderIntensityEffectElement,
  sliderContainerElement,
  effectLevelValueElement,
  textDescriptionElement
};
