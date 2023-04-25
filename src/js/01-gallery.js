import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const imagesList = document.querySelector('ul.gallery');
const newImage = galleryItems
  .map(
    (image) =>
      `<li><a class="gallery__item" href="${image.original}"><img class="gallery__image" src="${image.preview}" alt="${image.description}" /></a></li>`
  )
  .join('');

imagesList.insertAdjacentHTML('beforeend', newImage);

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });