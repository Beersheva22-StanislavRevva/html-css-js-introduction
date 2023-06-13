
import config from "../config/config.json" assert{type: 'json'}

export async function loadJson(url) {
    let response = await fetch(url);
    let json = await response.json();
    return json;
}

export async function addMovie(movie){
    const response = await fetch(config.baseUrl, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(movie)
    });
    return await response.json();
}