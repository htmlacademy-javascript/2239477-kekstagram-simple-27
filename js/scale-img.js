import { scaleValueElement, imgPreviewElement } from './elements.js';
import { STEP_SCALE, MAX_SCALE_VALUE, MIN_SCALE_VALUE, MAX_VALUE } from './const.js';

const scaleSmallerElement = document.querySelector('.scale__control--smaller');
const scaleBiggerElement = document.querySelector('.scale__control--bigger');

scaleBiggerElement.addEventListener('click', () => {
  let numValue = +scaleValueElement.value.slice(0, -1);

  if (+numValue < MAX_SCALE_VALUE) {
    numValue += STEP_SCALE;
    numValue = String(numValue);
    scaleValueElement.value = `${numValue }%`;
    if (numValue.length < MAX_VALUE) {
      imgPreviewElement.style.transform = `scale(${numValue.padStart(4, '0.')})`;
    } else {
      imgPreviewElement.style.transform = '';
    }
  }
});

scaleSmallerElement.addEventListener('click', () => {
  let numValue = +scaleValueElement.value.slice(0, -1);

  if (numValue > MIN_SCALE_VALUE) {
    numValue -= STEP_SCALE;
    numValue = String(numValue);
    scaleValueElement.value = `${numValue }%`;
    if (numValue.length < MAX_VALUE) {
      imgPreviewElement.style.transform = `scale(${numValue.padStart(4, '0.')})`;
    }
  }
});
