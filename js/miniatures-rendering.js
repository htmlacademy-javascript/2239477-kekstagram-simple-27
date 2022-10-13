import { objects } from './get-object-description.js';

const minPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureContainer = document.querySelector('.pictures');

function getListContent(obj) {
  const fragment = new DocumentFragment();

  obj.forEach((_value, index) => {
    const clonedMinPictureTemplate = minPictureTemplate.cloneNode(true);

    clonedMinPictureTemplate.firstElementChild.src = obj[index].url;
    clonedMinPictureTemplate.querySelector('.picture__likes').textContent = obj[index].likes;
    clonedMinPictureTemplate.querySelector('.picture__comments').textContent = obj[index].comments;

    fragment.append(clonedMinPictureTemplate);
  });

  return fragment;
}

pictureContainer.append(getListContent(objects));
