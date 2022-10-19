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

  if (evt.target.checked) {

    sliderContainer.hidden = false;

    if (evt.target.value === 'chrome') {
      updateSlider(0, 1, 1, .1);
      intensityEffect('grayscale(', ')');

    } else if (evt.target.value === 'sepia') {
      updateSlider(0, 1, 1, .1);
      intensityEffect('sepia(', ')');

    } else if (evt.target.value === 'marvin') {
      updateSlider(0, 100, 100, 1);
      intensityEffect('invert(', '%)');
    } else if (evt.target.value === 'phobos') {
      updateSlider(0, 3, 3, .1);
      intensityEffect('blur(', 'px)');
    } else if (evt.target.value === 'heat') {
      updateSlider(1, 3, 3, .1);
      intensityEffect('brightness(', ')');
    } else if (evt.target.value === 'none') {
      sliderContainer.hidden = true;
      imgPreview.style.removeProperty('filter');
    } else {
      updateSlider(0, 1, 1, .1);
      imgPreview.style.removeProperty('filter');
    }
  }
});
