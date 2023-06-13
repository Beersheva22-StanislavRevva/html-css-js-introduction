import moviesObj1 from '../config/movies-2.json' assert {type: 'json'}
import config from "../config/config.json" assert{type: 'json'}
export default class HomePage {
    detailsSection;
    detailedImageElement;
    detailedTitleElement;
    mainSelection;
    thumbnailsSection;
    thumbnailsList;
    #HIDDEN = "hidden";
    #POINT = "is-point";
   

    constructor() {

        this.detailsSection = document.querySelector(".details-section");
        this.detailsSection.innerHTML = `<div class="details-container">
    <img src="" class="details-image">
    <span class="details-title">X</span>
    <span id = "details-buttons-container">
    <button class="hide-button" id="fl-button">+FL</button>
    <button class="hide-button" id="wl-button">+WL</button>
    <button class="hide-button" id="x-button">X</button>
    </span>
</div>`;
        this.detailedImageElement = document.querySelector(".details-image");
        this.detailedTitleElement = document.querySelector(".details-title");
        this.mainSelection = document.querySelector("main");
        this.thumbnailsSection = document.querySelector(".thumbnails-section");
        this.thumbnailsList = document.querySelector(".thumbnails-list");
        this.#HIDDEN = "hidden";
        this.#POINT = "is-point";
                               
    }

async buildThumbList(moviesObj) {
    let listItems = moviesObj.results.map((movie) => {
        const litItem = `<li class="thumbnails-item">
                    <a href="#" class="thumbnails-anchor" data-details-image="${( config.prefixImgURL + movie.poster_path)}"
                    data-details-text="<b>${movie.title} </b> <br> popularity: ${Math.trunc(movie.popularity)} <br> release ${movie.release_date} <br> votes ${movie.vote_average} ">
                        <img class="thumbnails-image" src="${ config.prefixImgURL + movie.poster_path}">
                        <span class = "thumbnails-title">"${movie.title}"</span>
                    </a>
	</li>`;
        return litItem;
    })
    this.thumbnailsList.innerHTML = "";
    this.thumbnailsList.innerHTML = listItems.join('');
    this.thumbnailsSection.innerHTML +=
        '<div class="page-navigation"><button class="page-button" id="prev-page-button">Prev page</button><button class="page-button" id="next-page-button">Next page</button><div>';
          
}

buildWishList(wishList) {
    // let listItems = wishList.map((movie) => {
    //     const litItem = `<li class="thumbnails-item">
    //                 <a href="#" class="thumbnails-anchor" data-details-image="${( config.prefixImgURL + movie.poster_path)}"
    //                 data-details-text="<b>${movie.title} </b> <br> popularity: ${Math.trunc(movie.popularity)} <br> release ${movie.release_date} <br> votes ${movie.vote_average} ">
    //                     <img class="thumbnails-image" src="${ config.prefixImgURL + movie.poster_path}">
    //                     <span class = "thumbnails-title">"${movie.title}"</span>
    //                 </a>
	// </li>`;
    //     return litItem;
    // })
    
    this.thumbnailsList.innerHTML = "";
    this.thumbnailsList.innerHTML = wishList;
    this.thumbnailsSection.innerHTML +=
        '<div class="page-navigation"><button class="page-button" id="prev-page-button">Prev page</button><button class="page-button" id="next-page-button">Next page</button><div>';
          
}


async loadJson(url) {
    let response = await fetch(url);
    let json = await response.json();
    return json;
}

//window.hideDetails = hideDetails;
}