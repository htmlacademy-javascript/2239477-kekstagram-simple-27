import { scaleValue, imgPreview } from './elements.js';
import { STEP_SCALE, MAX_SCALE_VALUE, MIN_SCALE_VALUE } from './const.js';

const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');

scaleBigger.addEventListener('click', () => {
  let numValue = +scaleValue.value.slice(0, -1);

  if (+numValue < MAX_SCALE_VALUE) {
    numValue += STEP_SCALE;
    numValue = String(numValue);
    scaleValue.value = `${numValue }%`;
    if (numValue.length < 3) {
      imgPreview.style.transform = `scale(${numValue.padStart(4, '0.')})`;
    } else {
      imgPreview.style.transform = '';
    }
  }
});

scaleSmaller.addEventListener('click', () => {
  let numValue = +scaleValue.value.slice(0, -1);

  if (numValue > MIN_SCALE_VALUE) {
    numValue -= STEP_SCALE;
    numValue = String(numValue);
    scaleValue.value = `${numValue }%`;
    if (numValue.length < 3) {
      imgPreview.style.transform = `scale(${numValue.padStart(4, '0.')})`;
    }
  }
});
