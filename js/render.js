import { renderBigPicture } from './full-photo.js';

const PICTURE_IMG = '.picture__img';
const PICTURE_LIKES = '.picture__likes';
const PICTURE_COMMENTS = '.picture__comments';

export const render = (container, element)=>{
  container.appendChild(element);
};


const initPhotoElement = (photoElement, photo)=>{
  const {comments,url,likes} = photo;
  photoElement.querySelector(PICTURE_IMG).src = url;
  photoElement.querySelector(PICTURE_LIKES).textContent = likes;
  photoElement.querySelector(PICTURE_COMMENTS).textContent = comments.length;
  photoElement.addEventListener('click', () => {
    renderBigPicture(photo);
  });
  return photoElement;
};


export const renderPhotoList = (template, photos)=>photos.map((item)=>initPhotoElement(template.cloneNode(true), item));


export const wrapElements = (elements)=> {
  const fragment = document.createDocumentFragment();
  fragment.append(...elements);
  return fragment;
};
