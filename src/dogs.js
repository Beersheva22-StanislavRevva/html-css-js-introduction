const detailedImageElement = document.querySelector(".details-image");
const detailedTitleElement = document.querySelector(".details-title");
const thumbnailsAncors = document.querySelectorAll(".thumbnails-anchor");
for (let i = 0; i < thumbnailsAncors.length; i++) {
    thumbnailsAncors[i].addEventListener("click", function() {
        setDetails(thumbnailsAncors[i]);    
    });
}
function setDetails(anchor) {
    detailedImageElement.src = anchor.getAttribute("data-details-image");
    detailedTitleElement.innerHTML = anchor.getAttribute("data-details-text");
}