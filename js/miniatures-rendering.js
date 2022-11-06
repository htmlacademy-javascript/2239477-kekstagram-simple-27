const minPictureTemplateElement = document.querySelector('#picture').content.querySelector('.picture');

const pictureContainerElement = document.querySelector('.pictures');
const getListContent = (photo) => {
  const fragment = new DocumentFragment();

  photo.forEach((_value, index) => {
    const clonedMinPictureTemplateElement = minPictureTemplateElement.cloneNode(true);

    clonedMinPictureTemplateElement.querySelector('.picture__img').src = photo[index].url;
    clonedMinPictureTemplateElement.querySelector('.picture__likes').textContent = photo[index].likes;
    clonedMinPictureTemplateElement.querySelector('.picture__comments').textContent = photo[index].comments;

    fragment.append(clonedMinPictureTemplateElement);
  });
  pictureContainerElement.append(fragment);
};

export { getListContent };
