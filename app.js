import Gallery from "./Gallery.js";

window.onload = async () => {

    const request = await fetch("data.json");
    const result = await request.json();
    

    const gallery = new Gallery((ArtPiece) => {
        // ArtPiece.artist = "Testing"
        title.innerText = ArtPiece.title;
        artist.innerText = ArtPiece.artist;
        medium.innerText = ArtPiece.medium;
    new script(gallery.addArtPiece())
});
    result.forEach(item => {
       gallery.addArtPiece(item);
});
    const inf = document.querySelector("#inf-view")
    const title = document.querySelector("#title")
    const artist = document.querySelector("#artist")
    const medium = document.querySelector("#medium")

    function showInf(infoId) {
        const allInfo = document.querySelectorAll('inf-view');
        allInfo.forEach(info => info.style.display = 'none');
  
        
        const infoCorrespondente = document.getElementById(inf-view);
        
        infoCorrespondente.style.display = 'block';
      }
}