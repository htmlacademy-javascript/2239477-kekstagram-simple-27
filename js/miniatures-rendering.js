const minPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureContainer = document.querySelector('.pictures');
const getListContent = (photo) => {
  const fragment = new DocumentFragment();

  photo.forEach((_value, index) => {
    const clonedMinPictureTemplate = minPictureTemplate.cloneNode(true);

    clonedMinPictureTemplate.querySelector('.picture__img').src = photo[index].url;
    clonedMinPictureTemplate.querySelector('.picture__likes').textContent = photo[index].likes;
    clonedMinPictureTemplate.querySelector('.picture__comments').textContent = photo[index].comments;

    fragment.append(clonedMinPictureTemplate);
  });
  pictureContainer.append(fragment);
};

export { getListContent };
