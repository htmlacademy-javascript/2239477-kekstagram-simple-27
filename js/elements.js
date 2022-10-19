const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview img');
const previewEffectsInput = document.querySelectorAll('.effects__radio');
const imgPreviewList = document.querySelector('.effects__list');
const sliderIntensityEffect = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');


const scaleValueTetx = scaleValue.value;

export {
  scaleValue,
  imgPreview,
  scaleValueTetx,
  previewEffectsInput,
  imgPreviewList,
  sliderIntensityEffect,
  sliderContainer,
  effectLevelValue
};
