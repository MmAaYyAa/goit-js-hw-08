// Add imports above this line
import { galleryItems } from './gallery-items.js';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");

const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item" >
<a class="gallery__link" href="${original}">
<img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
</a>
</li>`
);

galleryContainer.insertAdjacentHTML("beforeend", markup.join(""));

const lightbox = new SimpleLightbox('.gallery__link',
    {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });
