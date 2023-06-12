export function getGenreIndex(genre, config) {
    let i = 0;
    let res;
    for (i = 0; i < config.genres.length; i++) {
        if (config.genres[i].name == genre) {
            res = config.genres[i].id;
            break;
        }
    }
    return res;
}