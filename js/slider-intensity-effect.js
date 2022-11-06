import { imgPreviewElement, imgPreviewListElement, sliderIntensityEffectElement, sliderContainerElement, effectLevelValueElement } from './elements.js';

import { initializeSlider } from './initialize-slider.js';

initializeSlider();

function intensityEffect (filter, as) {
  sliderIntensityEffectElement.noUiSlider.on('update', () => {
    effectLevelValueElement.value = sliderIntensityEffectElement.noUiSlider.get();
    imgPreviewElement.style.filter = `${filter}${sliderIntensityEffectElement.noUiSlider.get()}${as}`;
  });
}

const updateSlider = (min, max, start, step) => {
  sliderIntensityEffectElement.noUiSlider.updateOptions({
    range: {
      'min': min,
      'max': max,
    },
    start: start,
    step: step,
  });
};

imgPreviewListElement.addEventListener('change', (evt) => {

  sliderContainerElement.hidden = false;
  if(!evt.target.checked) {return;}
  switch (evt.target.value) {

    case 'chrome':
      updateSlider(0, 1, 1, .1);
      return intensityEffect('grayscale(', ')');
    case 'sepia':
      updateSlider(0, 1, 1, .1);
      return intensityEffect('sepia(', ')');
    case'marvin':
      updateSlider(0, 100, 100, 1);
      return intensityEffect('invert(', '%)');
    case 'phobos':
      updateSlider(0, 3, 3, .1);
      return intensityEffect('blur(', 'px)');
    case 'heat':
      updateSlider(1, 3, 3, .1);
      return intensityEffect('brightness(', ')');
    case 'none':
      sliderContainerElement.hidden = true;
      return imgPreviewElement.style.removeProperty('filter');
    default:
      updateSlider(0, 1, 1, .1);
      return imgPreviewElement.style.removeProperty('filter');
  }
});
