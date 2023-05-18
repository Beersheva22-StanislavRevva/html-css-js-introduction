import moviesObj from '../movies.json' assert {type: 'json'}
//import moviesObj from '../movies.json' assert {type:'json'};
const detailedImageElement = document.querySelector(".details-image");
const detailedTitleElement = document.querySelector(".details-title");
const detailsSection = document.querySelector(".details-section");
const mainSelection = document.querySelector("main");
const thumbnailsList = document.querySelector(".thumbnails-list");
const HIDDEN = "hidden";
const POINT = "is-point";
console.log(moviesObj.httpPrefix);

function getPictres() {
    let listItems = moviesObj.results.map((movie) => {
        const litItem = `<li class="thumbnails-item">
                    <a href="#" class = "thumbnails-anchor" data-details-image="${(moviesObj.httpPrefix + movie.poster_path)}"
                    data-details-text="${movie.original_title}">
                        <img src="${moviesObj.httpPrefix + movie.poster_path}">
                        <span class = "thumbnails-title">"${movie.original_title}"</span>
                    </a>
	</li>`;
    return litItem;   
    })
    return listItems.join('');
}

thumbnailsList.innerHTML = getPictres();
const thumbnailsAncors = document.querySelectorAll(".thumbnails-anchor");
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
window.hideDetails = hideDetails;