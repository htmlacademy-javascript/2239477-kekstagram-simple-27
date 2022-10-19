import { imgPreview, imgPreviewList, sliderIntensityEffect, sliderContainer, effectLevelValue } from './elements.js';

import { initializeSlider } from './initialize-slider.js';

initializeSlider();

const intensityEffect = (filter, as) => {

  // eslint-disable-next-line no-unused-vars
  sliderIntensityEffect.noUiSlider.on('update', (..._rest) => {
    effectLevelValue.value = sliderIntensityEffect.noUiSlider.get();
    imgPreview.style.filter = `${filter}${sliderIntensityEffect.noUiSlider.get()}${as}`;
  });
};

const updateSlider = (min, max, start, step) => {
  sliderIntensityEffect.noUiSlider.updateOptions({
    range: {
      'min': min,
      'max': max,
    },
    start: start,
    step: step,
  });
};

imgPreviewList.addEventListener('change', (evt) => {

  sliderContainer.hidden = false;

  switch (evt.target.checked) {

    case evt.target.value === 'chrome':
      updateSlider(0, 1, 1, .1);
      return intensityEffect('grayscale(', ')');
    case evt.target.value === 'sepia':
      updateSlider(0, 1, 1, .1);
      return intensityEffect('sepia(', ')');
    case evt.target.value === 'marvin':
      updateSlider(0, 100, 100, 1);
      return intensityEffect('invert(', '%)');
    case evt.target.value === 'phobos':
      updateSlider(0, 3, 3, .1);
      return intensityEffect('blur(', 'px)');
    case evt.target.value === 'heat':
      updateSlider(1, 3, 3, .1);
      return intensityEffect('brightness(', ')');
    case evt.target.value === 'none':
      sliderContainer.hidden = true;
      return imgPreview.style.removeProperty('filter');
    default:
      updateSlider(0, 1, 1, .1);
      return imgPreview.style.removeProperty('filter');
  }
});
