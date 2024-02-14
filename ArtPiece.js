export default class ArtPiece {
    #imageElem;
    #callback;
    #data;
    view;
    constructor(data, callback) {
      this.#data = data;
      this.#callback = callback;
      this.view = document.createElement("div");
      this.view.className = "item";
      this.#imageElem = document.createElement("img");
      this.#imageElem.src = this.#data.image;
      this.#imageElem.onclick = () => this.#callback();
      this.view.appendChild(this.#imageElem);
    }

    updateImage(newImageUrl) {
        this.#imageElem.src = newImageUrl;
    }
  
    get type() {
      return this.#data.type;
    }

    get image() {
        return this.#data.image;
      }
  
    get artist() {
      return this.#data.artist;
    }

    get data() {
        return this.#data;
    }
    
    get medium() {
        return this.#data.medium;
    }
    get title() {
        return this.#data.title;
    }
  
    set artist(value) {
      this.#data.artist = value;
    }

    set name(value) {
        this.#data.name = value;
  }
}