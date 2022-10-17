import { scaleValue, imgPreview } from './elements.js';

const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');

scaleBigger.addEventListener('click', () => {
  let numValue = +scaleValue.value.slice(0, -1);

  if (+numValue < 100) {
    numValue += 25;
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

  if (numValue > 25) {
    numValue -= 25;
    numValue = String(numValue);
    scaleValue.value = `${numValue }%`;
    if (numValue.length < 3) {
      imgPreview.style.transform = `scale(${numValue.padStart(4, '0.')})`;
    }
  }
});
