import config from "../config/config.json" assert{type: 'json'}
const genresArray = config.genres;
export default class FilterForm {
#formElement
    constructor() {
        this.buildForm();
    }
    buildForm () {
        this.#formElement = document.getElementById("form-section-id");
        const genres = genresArray.map(obj => `<option value=${obj.name}>${obj.name}</option>`).join("");
        this.#formElement.innerHTML = `<form id = "form-id"><div id = "form-header-id">Movies Filters</div><select id="genres" name="genres">
        <option value hidden selected disabled>--Select Genre--</option>${genres}
        </select><input type="number" class="form-input" name="year" placeholder="--Enter Film Year--"><button type="submit" id="submit-button-id">Submit</button></form>`
    }
}