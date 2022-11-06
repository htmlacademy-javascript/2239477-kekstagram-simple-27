import {TIME} from './const.JS';

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style = `z-index:100;
    position: absolute;
    width: 100%;
    left: 50%;
    top: 50%;
    padding: 10px 3px;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    background-color: red;
    transform: translate(-50%, -50%);`;

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, TIME);
};

export { isEscapeKey, showAlert };
