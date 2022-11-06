import { closePopupEscKeydown } from './form-upload-img.js';
import { sendData } from './server.js';
import { isEscapeKey } from './util.js';

const formElement = document.getElementById('upload-select-image');
const btnSubmitElement = document.querySelector('.img-upload__submit');
const messageSuccessTemplateElement = document.querySelector('#success').content.querySelector('.success');
const messageErrorTemplateElement = document.querySelector('#error').content.querySelector('.error');
const bodyElement = document.body;

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'p',
  errorTextClass: 'form__error',
}, false);

const blockSubmitButton = () => {
  btnSubmitElement.disabled = true;
  btnSubmitElement.textContent = 'Публикация...';
};

const unblockSubmitButton = () => {
  btnSubmitElement.disabled = false;
  btnSubmitElement.textContent = 'Опубликовать';
};

function getSuccessMesage() {
  const fragment = new DocumentFragment();
  const clonedMessageSuccessTemplate = messageSuccessTemplateElement.cloneNode(true);
  fragment.append(clonedMessageSuccessTemplate);
  bodyElement.append(fragment);

  const successElement = document.querySelector('.success');
  const btnCloseSuccessElement = successElement.querySelector('.success__button');

  const onMesageEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      successElement.remove();

      document.removeEventListener('keydown', onMesageEscKeydown);
      document.removeEventListener('click', onMesageDocument);
    }
  };

  document.addEventListener('keydown', onMesageEscKeydown);

  function onMesageDocument (evt) {
    if (evt.target === successElement) {
      evt.preventDefault();
      successElement.remove();

      document.removeEventListener('keydown', onMesageEscKeydown);
      document.removeEventListener('click', onMesageDocument);
    }
  }

  document.addEventListener('click', onMesageDocument);

  btnCloseSuccessElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    successElement.remove();
    document.removeEventListener('keydown', onMesageEscKeydown);
    document.removeEventListener('click', onMesageDocument);
  });
}


function getErrorMesage() {
  document.removeEventListener('keydown', closePopupEscKeydown);

  const fragment = new DocumentFragment();
  const clonedMessageErrorTemplate = messageErrorTemplateElement.cloneNode(true);
  fragment.append(clonedMessageErrorTemplate);
  bodyElement.append(fragment);

  const errorElement = document.querySelector('.error');
  const btnCloseErrorElement = errorElement.querySelector('.error__button');

  const onMesageEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      errorElement.remove();

      document.removeEventListener('keydown', onMesageEscKeydown);

      document.removeEventListener('click', onMesageDocument);
      document.addEventListener('keydown', closePopupEscKeydown);
    }
  };
  document.addEventListener('keydown', onMesageEscKeydown);

  function onMesageDocument (evt) {
    if (evt.target === errorElement) {
      evt.preventDefault();
      errorElement.remove();
      document.removeEventListener('keydown', onMesageEscKeydown);
      document.removeEventListener('click', onMesageDocument);
      document.addEventListener('keydown', closePopupEscKeydown);
    }
  }

  document.addEventListener('click', onMesageDocument);

  btnCloseErrorElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    errorElement.remove();
    document.removeEventListener('keydown', onMesageEscKeydown);
    document.removeEventListener('click', onMesageDocument);
    document.addEventListener('keydown', closePopupEscKeydown);
  });
}

const setPhotoFormSubmit = (onSuccess) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          getSuccessMesage();
        },
        () => {
          getErrorMesage();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export { setPhotoFormSubmit, getErrorMesage };
