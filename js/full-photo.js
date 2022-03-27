const initComment = (commentElement, comment) => {
  const {
    avatar,
    message,
    name
  } = comment;

  commentElement.querySelector('.social__picture').src = avatar;
  commentElement.querySelector('.social__picture').alt = name;
  commentElement.querySelector('.social__text').textContent = message;
  return commentElement;

};
const renderCommentsList = (template, comments) => comments.map((item) => initComment(template.cloneNode(true), item));

const getCommentTemplate = () => {
  const commentTemplate = document.createElement('li');
  commentTemplate.classList.add('social__comment');
  commentTemplate.innerHTML = `
    <img
      class="social__picture"
      src=""
      alt=""
      width="35" height="35">
    <p class="social__text"></p>
  `;

  return commentTemplate;
};
const bigPictureContainer = document.querySelector('.big-picture');
const bigPicture = bigPictureContainer.querySelector('.big-picture__img img');
const bigPictureLikes = bigPictureContainer.querySelector('.likes-count');
const bigPictureCommentsNum = bigPictureContainer.querySelector('.comments-count');
const bigPictureComments = bigPictureContainer.querySelector('.social__comments');
const bigPictureCommentsCount = bigPictureContainer.querySelector('.social__comment-count');
const bigPictureCommentsLoader = bigPictureContainer.querySelector('.comments-loader');
const bidPictureCloseButton = document.querySelector('.big-picture__cancel');
const pageBody = document.querySelector('body');
const clearCommentsContent = (element) => {
  element.innerHTML = '';
};

export const renderBigPicture = (data) => {
  bigPicture.src = data.url;
  bigPictureLikes.textContent = data.likes;
  bigPictureCommentsNum.textContent = data.comments.length;
  clearCommentsContent(bigPictureComments);
  const commentList = renderCommentsList(getCommentTemplate(), data.comments);
  commentList.forEach((item) => bigPictureComments.appendChild(item));
};

let escapeHandler = null;
let buttonHandler = null;

const closePopup = () => {
  bigPictureContainer.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  if (buttonHandler) {
    bidPictureCloseButton.removeEventListener('click', buttonHandler);
  }
  if(escapeHandler){
    document.removeEventListener('keydown', escapeHandler);
  }
};

escapeHandler = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

buttonHandler = closePopup;

export const showBigPicture = () => {
  pageBody.classList.add('modal-open');
  bigPictureContainer.classList.remove('hidden');
  bigPictureCommentsCount.classList.add('hidden');
  bigPictureCommentsLoader.classList.add('hidden');

  bidPictureCloseButton.addEventListener('click', buttonHandler);
  document.addEventListener('keydown', escapeHandler);
};
