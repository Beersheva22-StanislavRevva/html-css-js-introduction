
export async function loadJson(url) {
    let response = await fetch(url);
    let json = await response.json();
    return json;
}