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
let movie;
let wishList = new Array();
let favorList = new Array();
const sections = [
    { title: "Popular", id: "popular-id" },
    { title: "Filter", id: "filter-id" },
    { title: "Wish list", id: "wish-list-id"},
    { title: "Favorites", id: "favorite-list-id" }
];
async function main (){
const menu = new Menu("menu-section-id", sections);
menuButtonsHandler();

let moviesObj = await getPopularMovieObj (page);
let homepage = new HomePage();
let showHomePage = homepage.buildThumbList(moviesObj);
setThumbnails();
detailsButtonsHandler();
pagePopularButtonsHandler(page);
}

const thumbnailsAncors = document.querySelectorAll(".thumbnails-anchor");
    thumbnailsAncors.forEach(anchor =>
        anchor.addEventListener('click', this.setDetails.bind(undefined, anchor)));


/*Menu buttons*/

function menuButtonsHandler() {
const popularButton = document.getElementById("popular-id");
const filterButton = document.getElementById("filter-id");
const wishListButton = document.getElementById("wish-list-id");
popularButton.addEventListener("click",() => popularButtonFn());
filterButton.addEventListener("click",() => filterButtonFn());
wishListButton.addEventListener("click",() => wishListButtonFn());
}

async function popularButtonFn() {
    hideDetails();
    ClearData();
    const moviesObj = await getPopularMovieObj (1);
    const homepage = new HomePage();
    const hp1 = homepage.buildThumbList(moviesObj);
    setThumbnails();
    detailsButtonsHandler();
    pagePopularButtonsHandler(page);
    
}

function wishListButtonFn() {
    hideDetails();
    ClearData();
    const homepage = new HomePage();
    const hp1 = homepage.buildWishList(wishList);
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
      const hp1 = homepage.buildThumbList(moviesObj);
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
    const hp1 = homepage.buildThumbList(moviesObj);
    setThumbnails();
    detailsButtonsHandler();
    pagePopularButtonsHandler(page);
}

async function prevBtnPopularFn(page) {
    const nextPageButton = document.getElementById("next-page-button");
    const prevPageButton = document.getElementById("prev-page-button");
    if(page > 1) {
        page--;
        ClearData();
        const moviesObj = await getPopularMovieObj (page);
        const homepage = new HomePage();
        const hp1 = homepage.buildThumbList(moviesObj);
        const nextPageButton = document.getElementById("next-page-button");
        const prevPageButton = document.getElementById("prev-page-button");
        setThumbnails();
        detailsButtonsHandler();
        pagePopularButtonsHandler(page);
    } else { prevPageButton.setAttribute('disabled','');
        }
}   

async function nextBtnFilterFn(page, genre, year) {
    ClearData();
    page++;
    const moviesObj = await getFilterMovieObj(page,genre,year);
    const homepage = new HomePage();
    const hp1 = homepage.buildThumbList(moviesObj);
    setThumbnails();
    detailsButtonsHandler();
    pageFilterButtonsHandler(page, genre);
}

async function prevBtnFilterFn(page,genre,year) {
    if(page > 1) {
        page--;
        ClearData();
        const moviesObj = await getFilterMovieObj(page,genre,year);
        const homepage = new HomePage();
        const hp1 = homepage.buildThumbList(moviesObj);
        const nextPageButton = document.getElementById("next-page-button");
        const prevPageButton = document.getElementById("prev-page-button");
        setThumbnails();
        detailsButtonsHandler();
        pageFilterButtonsHandler(page, genre, year);
    } else {prevPageButton.setAttribute('disabled','');
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
    showDetails(anchor);
    detailedImageElement.src = anchor.getAttribute("data-details-image");
    const detailedTitleElement = document.querySelector(".details-title");
    detailedTitleElement.innerHTML = anchor.getAttribute("data-details-text");
}
function showDetails(anchor) {
    setMovie(anchor);
    const detailsSection = document.querySelector(".details-section");
    const mainSelection = document.querySelector("main");
    mainSelection.classList.remove(HIDDEN);
    detailsSection.classList.add(POINT);
    const wlButton = document.getElementById("wl-button");
    wlButton.disabled =false;
    const flButton = document.getElementById("fl-button");
    flButton.disabled =false;
    setTimeout(function () {
        detailsSection.classList.remove(POINT);
    });
}
function hideDetails() {
    const mainSelection = document.querySelector("main");
    mainSelection.classList.add(HIDDEN);
}
function setMovie(anchor) {
    movie = `<li class="thumbnails-item">
    <a href="#" class="thumbnails-anchor" data-details-image="${anchor.getAttribute("data-details-image")}"
    data-details-text="${anchor.getAttribute("data-details-text")} ">
        <img class="thumbnails-image" src="${anchor.getAttribute("data-details-image")}">
        <span class = "thumbnails-title">"${anchor.getAttribute("data-details-text")}"</span>
    </a>
</li>`;
    
    anchor.cloneNode(true);
}
function addToWL() {
    const wlButton = document.getElementById("wl-button");
    wlButton.setAttribute('disabled','');
    wishList.push(movie);
}
function addToFL() {
    const flButton = document.getElementById("fl-button");
    flButton.setAttribute('disabled','');
    favorList.push(movie);
}


/*details buttons*/

function detailsButtonsHandler() {
    const xButton = document.getElementById("x-button");
    const wlButton = document.getElementById("wl-button");
    const flButton = document.getElementById("fl-button");
    xButton.addEventListener("click", () => hideDetails());
    wlButton.addEventListener("click", () => addToWL(movie));
    flButton.addEventListener("click", () => addToFL(movie));
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


