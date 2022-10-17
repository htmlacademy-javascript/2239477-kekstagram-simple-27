import { imgPreview } from './elements.js';

const imgPreviewList = document.querySelector('.effects__list');

function onEffectChange (evt) {
  if (evt.target.matches('input[type="radio"]')) {
    const imgClass = imgPreview.classList[0];

    if (evt.target.closest('.effects__item')) {
      const parent = evt.target.closest('.effects__item');
      const span = parent.querySelector('.effects__preview');

      imgPreview.classList.add(span.classList[1]);
      if (imgClass !== undefined) {
        imgPreview.classList.remove(imgClass);
      }
    }
  }
}

imgPreviewList.addEventListener('change', onEffectChange);
