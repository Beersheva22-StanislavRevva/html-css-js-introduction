import moviesObj1 from '../config/movies-2.json' assert {type: 'json'}
//import moviesObj from '../movies.json' assert {type:'json'};
export default class HomePage {
    detailsSection;
    detailedImageElement;
    detailedTitleElement;
    mainSelection;
    thumbnailsSection;
    thumbnailsList;
    #HIDDEN = "hidden";
    #POINT = "is-point";
    #PREFIX = "https://api.themoviedb.org/3/";
    #PREFIX_IMG = "https://image.tmdb.org/t/p/w500";
    #page;
    nextPageButton;
    prevPageButton;
    pageNavigation;

    constructor() {

        this.detailsSection = document.querySelector(".details-section");
        this.detailsSection.innerHTML = `<div class="details-container">
    <img src="" class="details-image">
    <span class="details-title">X</span>
    <span id = "details-buttons-container">
    <button onclick="hideDetails()" class="hide-button">+FL</button>
    <button onclick="hideDetails()" class="hide-button">+WL</button>
    <button onclick="hideDetails()" class="hide-button">X</button>
    </span>
</div>`;
        this.detailedImageElement = document.querySelector(".details-image");
        this.detailedTitleElement = document.querySelector(".details-title");
        this.mainSelection = document.querySelector("main");
        this.thumbnailsSection = document.querySelector(".thumbnails-section");
        this.thumbnailsList = document.querySelector(".thumbnails-list");
        this.#HIDDEN = "hidden";
        this.#POINT = "is-point";
        this.#PREFIX = "https://api.themoviedb.org/3/"
        this.#PREFIX_IMG = "https://image.tmdb.org/t/p/w500"
                        
    }

async runHomePage(page) {
    this.#page = page;
    //const moviesObj = await this.loadJson(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${this.#page}&api_key=2c46288716a18fb7aadcc2a801f3fc6b`);
    let listItems = moviesObj1.results.map((movie) => {
        const litItem = `<li class="thumbnails-item">
                    <a href="#" class="thumbnails-anchor" data-details-image="${( this.#PREFIX_IMG + movie.poster_path)}"
                    data-details-text="<b>${movie.title} </b> <br> Popularity ${Math.trunc(movie.popularity)}">
                        <img class="thumbnails-image" src="${ this.#PREFIX_IMG + movie.poster_path}">
                        <span class = "thumbnails-title">"${movie.title}"</span>
                    </a>
	</li>`;
        return litItem;
    })
    this.thumbnailsList.innerHTML = listItems.join('');
    this.thumbnailsSection.innerHTML +=
        '<div class="page-navigation"><button class="page-button" id="prev-page-button">Prev page</button><button class="page-button" id="next-page-button">Next page</button><div>';
    // this.nextPageButton = document.getElementById("next-page-button");
    // this.prevPageButton = document.getElementById("prev-page-button");
    const thumbnailsAncors = document.querySelectorAll(".thumbnails-anchor");
    thumbnailsAncors.forEach(anchor =>
        anchor.addEventListener('click', this.setDetails.bind(undefined, anchor)));
    // nextPageButton.addEventListener('click', this.nextPageButtonClick);
    // prevPageButton.addEventListener('click', this.prevPageButtonClick);
}

getNextPageButton() {
    return document.getElementById("next-page-button");
}

getPrevPageButton() {
    return document.getElementById("prev-page-button");
}

async loadJson(url) {
    let response = await fetch(url);
    let json = await response.json();
    return json;
}

async nextPageButtonClick() {
    
}

prevPageButtonClick() {
    page--;
    thumbnailsSection.innerHTML = "";
    detailsSection.innerHTML = "";
    runHomePage(page);
}

setDetails(anchor) {
    // this.showDetails();
    // this.detailedImageElement.src = anchor.getAttribute("data-details-image");
    // this.detailedTitleElement.innerHTML = anchor.getAttribute("data-details-text");
}
showDetails() {
    this.mainSelection.classList.remove(this.#HIDDEN);
    this.detailsSection.classList.add(this.#POINT);
    setTimeout(function () {
        this.detailsSection.classList.remove(this.#POINT);
    });
}
hideDetails() {
    this.mainSelection.classList.add(this.#HIDDEN);
}
clearPage() {
    this.thumbnailsList.innerHTML = "TEST";
    this.detailsSection.innerHTML = "TEST";
    //this.pageNavigation.innerHTML = "";

}

//window.hideDetails = hideDetails;
}