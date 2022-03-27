import {getRandomArrayElement, getRandomPositiveInteger} from './utils.js';

const urls = Array.from({length: 25}, (_,ix)=>`photos/${1+ix}.jpg`);

const description = [
  'Свадедное фото',
  'Кот в сапогах',
  'Путешествие на край света',
  'Роджество',
  'Встреча однокласников',
  'Мой завтрак',
  'Тренировка'
];

const commentsAvatars = Array.from({length:6}, (_,ix)=>`img/avatar-${1+ix}.svg`);

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const profileNames = [
  'Иван',
  'Артём',
  'Александр',
  'Мария',
  'Екатерина',
  'Станислав',
  'Светлана',
  'Юлия'
];
const createComment = () => ({
  id: getRandomPositiveInteger (1,282),
  avatar: getRandomArrayElement (commentsAvatars),
  message: getRandomArrayElement (messages),
  name: getRandomArrayElement (profileNames),
});
const createPost = () => ({
  id: getRandomPositiveInteger (0, 25),
  url: getRandomArrayElement (urls),
  description: getRandomArrayElement (description),
  likes: getRandomPositiveInteger (15,200),
  comments: Array.from({length: getRandomPositiveInteger(1,7)},createComment ),
});
export {createPost};


