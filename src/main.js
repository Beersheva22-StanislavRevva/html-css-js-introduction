import HomePage from "./ui/homepage.js";
import {loadJson} from "./service/jsonService.js"
import config from "./config/config.json" assert{type: 'json'}
import Menu from "./ui/Menu.js";
import FilterForm from "./ui/FilterForm.js";
import {getGenreIndex} from "./service/movieService.js";

const HIDDEN = "hidden";
const POINT = "is-point";
let page = 1;
let genre;
let year;
const sections = [
    { title: "Popular", id: "popular-id" },
    { title: "Filter", id: "filter-id" },
    { title: "Favorites", id: "favorite-id" }
];
async function main (){
const menu = new Menu("menu-section-id", sections);
menuButtonsHandler();

let moviesObj = await getPopularMovieObj (page);
let homepage = new HomePage();
let showHomePage = homepage.runHomePage(moviesObj);
setThumbnails();
pagePopularButtonsHandler(page);
}

const thumbnailsAncors = document.querySelectorAll(".thumbnails-anchor");
    thumbnailsAncors.forEach(anchor =>
        anchor.addEventListener('click', this.setDetails.bind(undefined, anchor)));


/*Menu buttons*/

function menuButtonsHandler() {
const popularButton = document.getElementById("popular-id");
const filterButton = document.getElementById("filter-id");
const favoriteButton = document.getElementById("favorite-id");
popularButton.addEventListener("click",() => popularButtonFn());
filterButton.addEventListener("click",() => filterButtonFn());
favoriteButton.addEventListener("click",() => favoriteButtonFn());
}

async function popularButtonFn() {
    hideDetails();
    ClearData();
    const moviesObj = await getPopularMovieObj (1);
    const homepage = new HomePage();
    const hp1 = homepage.runHomePage(moviesObj);
    setThumbnails();
    detailsButtonsHandler();
    pagePopularButtonsHandler(page);
    
}

async function filterButtonFn() {
    ClearData();
    const filterForm = new FilterForm();
    const formElement = document.getElementById("form-id");
    const submitButton = document.getElementById("submit-button-id");
    formElement.onsubmit = async (event) => {
        genre = 0;
        year = 0;
        event.preventDefault();
        const formData = new FormData(formElement);
        genre = formData.get("genres");
        year = formData.get("year");
        formElement.reset();
        formElement.ariaDisabled;
      let genreId = getGenreIndex(genre, config);
      const thumbnailsList = document.querySelector(".thumbnails-list")
      const moviesObj = await getFilterMovieObj (1, genreId, year);
      const homepage = new HomePage();
      const hp1 = homepage.runHomePage(moviesObj);
      setThumbnails();
      detailsButtonsHandler();
      pageFilterButtonsHandler(1, genreId, year);
      submitButton.setAttribute('disabled','');
      
    }
}

/* page navigation */

function pagePopularButtonsHandler(page) {
    const nextPageButton = document.getElementById("next-page-button");
    const prevPageButton = document.getElementById("prev-page-button");
    nextPageButton.addEventListener("click", () => nextBtnPopularFn(page));
    prevPageButton.addEventListener("click", () => prevBtnPopularFn(page));
}

function pageFilterButtonsHandler(page,genre,year) {
    const nextPageButton = document.getElementById("next-page-button");
    const prevPageButton = document.getElementById("prev-page-button");
    nextPageButton.addEventListener("click", () => nextBtnFilterFn(page,genre,year));
    prevPageButton.addEventListener("click", () => prevBtnFilterFn(page,genre,year));
}


async function nextBtnPopularFn(page) {
    ClearData();
    page++;
    const moviesObj = await getPopularMovieObj (page);
    const homepage = new HomePage();
    const hp1 = homepage.runHomePage(moviesObj);
    pagePopularButtonsHandler(page);
}

async function prevBtnPopularFn(page) {
    if(page > 1) {
        page--;
        ClearData();
        const moviesObj = await getPopularMovieObj (page);
        const homepage = new HomePage();
        const hp1 = homepage.runHomePage(moviesObj);
        const nextPageButton = document.getElementById("next-page-button");
        const prevPageButton = document.getElementById("prev-page-button");
        pagePopularButtonsHandler(page);
    }
}   

async function nextBtnFilterFn(page, genre, year) {
    ClearData();
    page++;
    const moviesObj = await getFilterMovieObj(page,genre,year);
    const homepage = new HomePage();
    const hp1 = homepage.runHomePage(moviesObj);
    pageFilterButtonsHandler(page, genre);
}

async function prevBtnFilterFn(page,genre,year) {
    if(page > 1) {
        page--;
        ClearData();
        const moviesObj = await getFilterMovieObj(page,genre,year);
        const homepage = new HomePage();
        const hp1 = homepage.runHomePage(moviesObj);
        const nextPageButton = document.getElementById("next-page-button");
        const prevPageButton = document.getElementById("prev-page-button");
        pageFilterButtonsHandler(page, genre, year);
    }
}  

/*Details image*/

function setThumbnails () {
const thumbnailsAncors = document.querySelectorAll(".thumbnails-anchor");
    thumbnailsAncors.forEach(anchor =>
        anchor.addEventListener('click', setDetails.bind(undefined, anchor)));
}
function setDetails(anchor) {
    const detailedImageElement = document.querySelector(".details-image")
    showDetails();
    detailedImageElement.src = anchor.getAttribute("data-details-image");
    const detailedTitleElement = document.querySelector(".details-title");
    detailedTitleElement.innerHTML = anchor.getAttribute("data-details-text");
}
function showDetails() {
    const detailsSection = document.querySelector(".details-section");
    const mainSelection = document.querySelector("main");
    mainSelection.classList.remove(HIDDEN);
    detailsSection.classList.add(POINT);
    setTimeout(function () {
        detailsSection.classList.remove(POINT);
    });
}
function hideDetails() {
    const mainSelection = document.querySelector("main");
    mainSelection.classList.add(HIDDEN);
}
/*details buttons*/

function detailsButtonsHandler() {
    const xButton = document.getElementById("x-button");
    //const wlButton = document.getElementById("wl-button");
    //const flButton = document.getElementById("fl-button");
    xButton.addEventListener("click", () => hideDetails());
    //wlButton.addEventListener("click", () => addToWL());
    //flButton.addEventListener("click", () => addToFL());
}


/*data processing*/

function ClearData() {
        const pageNavigation = document.querySelector(".page-navigation");
        if (pageNavigation != undefined){
        pageNavigation.remove();
        }
        const thumbnailsList = document.querySelector(".thumbnails-list");
        thumbnailsList.innerHTML = "";
        const formSection = document.getElementById("form-section-id");
        formSection.innerHTML = "";

    }

async function getPopularMovieObj (page) {
    let url = urlPopular(page);
    let moviesObj = await loadJson(url);
    return moviesObj;
}

function urlPopular(page) {
    return config.prefixURL + `/movie/popular?language=en-US&page=${page}`+config.apiKey;
}

async function getFilterMovieObj (page, genre, year) {
    let url = urlFilter(page, genre, year);
    let moviesObj = await loadJson(url);
    return moviesObj;
}

function urlFilter(page, genre) {
    return config.prefixURL + `discover/movie?with_genres=${genre}&primary_release_year=${year}&page=${page}`+config.apiKey;
}


main();


