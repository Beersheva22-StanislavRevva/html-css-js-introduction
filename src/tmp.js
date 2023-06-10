// async function getPopular() {
//     const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=2c46288716a18fb7aadcc2a801f3fc6b");
//          return await response.json();
//  }
//  fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=2c46288716a18fb7aadcc2a801f3fc6b").then(
//     x =>x.json()).then(y=>console.log(y));

const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=2c46288716a18fb7aadcc2a801f3fc6b";

async function loadJson(url) { // (1)
    let response = await fetch(url); // (2)
  
    let json = await response.json(); // (3)
    return json;
    }
  
  
async function run(url) {
    res = await loadJson(url);
   console.log(res);
}

run(url);





 