const detailedImageElement = document.querySelector(".details-image");
const detailedTitleElement = document.querySelector(".details-title");
const thumbnailsAncors = document.querySelectorAll(".thumbnails-anchor");
const detailsSection = document.querySelector(".details-section");
const mainSelection = document.querySelector("main");
const HIDDEN = "hidden";
const POINT = "is-point";

for (let i = 0; i < thumbnailsAncors.length; i++) {
    thumbnailsAncors[i].addEventListener("click", function() {
        setDetails(thumbnailsAncors[i]);    
    }
    );
}
thumbnailsAncors.forEach(anchor => anchor
.addEventListener('click', setDetails.bind(undefined,anchor)));

function setDetails(anchor) {
    showDetails();
    detailedImageElement.src = anchor.getAttribute("data-details-image");
    detailedTitleElement.innerHTML = anchor.getAttribute("data-details-text");
}
function showDetails(anchor) {
    mainSelection.classList.remove(HIDDEN);
    detailsSection.classList.add(POINT);
    setTimeout(function(){
        detailsSection.classList.remove(POINT);
    });
}  
function hideDetails(anchor) {
    mainSelection.classList.add(HIDDEN);
}