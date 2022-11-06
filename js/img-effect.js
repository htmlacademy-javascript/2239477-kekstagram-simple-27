import { imgPreviewElement, imgPreviewListElement } from './elements.js';

function onEffectChange (evt) {
  if (evt.target.matches('input[type="radio"]')) {
    const imgClass = imgPreviewElement.classList[0];

    if (evt.target.closest('.effects__item')) {
      const parentElement = evt.target.closest('.effects__item');
      const spanElement = parentElement.querySelector('.effects__preview');

      imgPreviewElement.classList.add(spanElement.classList[1]);
      if (imgClass !== undefined) {
        imgPreviewElement.classList.remove(imgClass);
      }
    }
  }
}

imgPreviewListElement.addEventListener('change', onEffectChange);
