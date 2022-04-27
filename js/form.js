export const setFormHandlers = () => {
  const uploadFileStart = document.querySelector ('.img-upload__start');
  const uploadFile = uploadFileStart.querySelector ('.img-upload__input');
  const uploadOverlay = document.querySelector ('.img-upload__overlay');
  const body = document.querySelector ('body');
  uploadFileStart.addEventListener ('click', () => {
    uploadFile.classList.remove ('visually-hidden');
  });
};
