import { sliderIntensityEffectElement } from './elements.js';

const initializeSlider = () => {
  noUiSlider.create(sliderIntensityEffectElement, {
    range: {
      'min': 0,
      'max': 1,
    },
    start: 1,
    step: .1,
    connect: 'lower',
    keyboardSupport: true,
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    }
  });
};

export { initializeSlider };
