import HomePage from "./ui/homepage.js";
let page = 1;
let homepage = new HomePage();
homepage.runHomePage(page);




function test() {
const thumbnailsList = document.querySelector(".thumbnails-list");
const detailsSection = document.querySelector(".details-section");
thumbnailsList.innerHTML = "TEST";
detailsSection.innerHTML = "TEST";
}

//homepage.runHomePage(page);
// page = 3;
// homepage = new HomePage(page);

// const nextPageButton = homepage.getNextPageButton();
// const prevPageButton = homepage.getPrevPageButton();
// nextPageButton.addEventListener('click', nextPageButtonClick);
// prevPageButton.addEventListener('click', prevPageButtonClick);
// function nextPageButtonClick() {
//     homepage.clearPage();
//     page++;
//     homepage = new HomePage(page);
// };
// function prevPageButtonClick() {
//     homepage.clearPage();
//     page++;
//     homepage = new HomePage(page);
// };

