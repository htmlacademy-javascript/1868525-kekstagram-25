import {createPost} from './data.js';
import { render, renderPhotoList, wrapElements } from './render.js';
const IMAGE_TEMPLATE_ID = '#picture';
const IMAGE_ITEM_SELECTOR = '.picture';
const IMAGES_CONTAINER_SELECTOR ='.pictures';

const getImageElementFromTemplate = ()=> {
  const template = document.querySelector(IMAGE_TEMPLATE_ID);
  if(!template){
    throw new Error('Template not found');
  }

  const element = template.content.querySelector(IMAGE_ITEM_SELECTOR);
  if(!element){
    throw new Error('Element not found');
  }
  return element.cloneNode(true);
};

const getPictureListContainer = () => {
  const element = document.querySelector(IMAGES_CONTAINER_SELECTOR);
  if(!element){
    throw new Error('not found');
  }
  return element;
};

const posts = Array.from({length:12}, createPost);

render(getPictureListContainer(), wrapElements(renderPhotoList(getImageElementFromTemplate(),posts)));
