import moviesObj1 from '../src/config/movies-2.json' assert {type: 'json'}
//import moviesObj from '../movies.json' assert {type:'json'};
const detailsSection = document.querySelector(".details-section");
detailsSection.innerHTML = `<div class="details-container">
    <img src="" class="details-image">
    <span class="details-title">X</span>
    <span id = "details-buttons-container">
    <button onclick="hideDetails()" class="hide-button">+FL</button>
    <button onclick="hideDetails()" class="hide-button">+WL</button>
    <button onclick="hideDetails()" class="hide-button">X</button>
    </span>
</div>`;
const detailedImageElement = document.querySelector(".details-image");
const detailedTitleElement = document.querySelector(".details-title");
const mainSelection = document.querySelector("main");
const thumbnailsSection = document.querySelector(".thumbnails-section");
const thumbnailsList = document.querySelector(".thumbnails-list");
const HIDDEN = "hidden";
const POINT = "is-point";
const PREFIX = "https://api.themoviedb.org/3/"
const PREFIX_IMG = "https://image.tmdb.org/t/p/w500"
let page = 2;


async function runHomePage(page) {
const moviesObj = await loadJson(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=2c46288716a18fb7aadcc2a801f3fc6b`);    
let listItems =  moviesObj.results.map((movie) => {
        const litItem = `<li class="thumbnails-item">
                    <a href="#" class="thumbnails-anchor" data-details-image="${(PREFIX_IMG + movie.poster_path)}"
                    data-details-text="<b>${movie.title} </b> <br> Popularity ${Math.trunc(movie.popularity)}">
                        <img class="thumbnails-image" src="${PREFIX_IMG + movie.poster_path}">
                        <span class = "thumbnails-title">"${movie.title}"</span>
                    </a>
	</li>`;
    return litItem;   
    })
    thumbnailsList.innerHTML =  listItems.join('');
    thumbnailsSection.innerHTML += 
    '<div class="page-navigation"><button class="page-button" id="prev-page-button">Prev page</button><button class="page-button" id="next-page-button">Next page</button><div>';
    const nextPageButton = document.getElementById("next-page-button");
    const prevPageButton = document.getElementById("prev-page-button");
    const thumbnailsAncors = document.querySelectorAll(".thumbnails-anchor");
    thumbnailsAncors.forEach(anchor => 
        anchor.addEventListener('click', setDetails.bind(undefined,anchor)));
    nextPageButton.addEventListener('click', nextPageButtonClick);
    prevPageButton.addEventListener('click', prevPageButtonClick);
}
runHomePage(page);

async function loadJson(url) {
    let response = await fetch(url);
    let json = await response.json();
    return json;
    }

async function nextPageButtonClick () {
    page++;
    const moviesObj = await loadJson(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=2c46288716a18fb7aadcc2a801f3fc6b`);
    const thumbnailsList = document.querySelector(".thumbnails-list");
    thumbnailsList.innerHTML = "";
    detailsSection.innerHTML = "";
    //runHomePage(page);
    let listItems = moviesObj.results.map((movie) => {
        const litItem = `<li class="thumbnails-item">
            <a href="#" class="thumbnails-anchor" data-details-image="${(PREFIX_IMG + movie.poster_path)}"
            data-details-text="<b>${movie.title} </b> <br> Popularity ${Math.trunc(movie.popularity)}">
            <img class="thumbnails-image" src="${PREFIX_IMG + movie.poster_path}">
            span class = "thumbnails-title">"${movie.title}"</span>
            </a>
	        </li>`;
    return litItem;   
    });
    thumbnailsList.innerHTML = listItems.join('');

    // thumbnailsSection.innerHTML += 
    // '<div class="page-navigation"><button class="page-button" id="prev-page-button">Prev page</button><button class="page-button" id="next-page-button">Next page</button><div>';
    // const nextPageButton = document.getElementById("next-page-button");
    // const prevPageButton = document.getElementById("prev-page-button");
    const thumbnailsAncors = document.querySelectorAll(".thumbnails-anchor");
    thumbnailsAncors.forEach(anchor => 
        anchor.addEventListener('click', setDetails.bind(undefined,anchor)));
    // nextPageButton.addEventListener('click', nextPageButtonClick);
    // prevPageButton.addEventListener('click', prevPageButtonClick);
}

function prevPageButtonClick () {
page--;
thumbnailsSection.innerHTML="";
detailsSection.innerHTML="";
runHomePage(page);
}

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