import Painting from "./Painting.js";
import Photo from "./Photo.js";
import Sculpture from "./Sculpture.js";

export default class Gallery {

    #callback;
    #view;

    constructor(callback) {
         this.#callback = callback;
         this.#view = document.querySelector("#gallery-view")
    }

    addArtPiece(art) {
        let nextArt = null;
       
        switch (art.type) {
            case "Painting":
                nextArt = new Painting(art, () => this.#callback(nextArt));
                break;
            case "Photo":
               nextArt = new Photo(art, () => this.#callback(nextArt));
                break;
            case "Sculpture":
               nextArt = new Sculpture(art, () => this.#callback(nextArt));
                break;
            default:
                break;
    }
    this.#view.appendChild(nextArt.view)
    }

    removeArtPiece(index) {
        if (index >= 0 && index < this.ArtPieces.length) {
          galleryElement.removeChild(galleryElement.childNodes[index]);
          this.artPieces.splice(index, 1);
        } else {
          console.log('Error, não é possível remover a obra de arte.');
    }
      
}
}

