// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

/**
 * Створює розмітку на підставі масиву даних
 * @param {Array} arr
 * @returns {String} Розмітка елементів
 */
function createMarkupItems(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li>`
    )
    .join("");
}

gallery.insertAdjacentHTML("beforeend", createMarkupItems(galleryItems));

const modal = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  overlayOpacity: 0.9,
});
// Change code below this line

console.log(galleryItems);
