import { imgPreview } from './elements.js';

const previewEffectsInput = document.querySelectorAll('.effects__radio');
const previewEffects = document.querySelectorAll('.effects__preview');

previewEffectsInput.forEach((effect, index) => {
  effect.addEventListener('click', function () {
    const imgClass = imgPreview.classList[0];
    const imgEffect = previewEffects[index].classList[1];

    if (this.checked && !previewEffectsInput[0].checked) {

      imgPreview.classList.add(imgEffect);

      if (imgClass !== undefined) {
        imgPreview.classList.remove(imgClass);
      }
    } else {
      imgPreview.classList.remove(imgClass);
    }
  });
});
