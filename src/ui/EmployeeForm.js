export default class EmployeeForm {
    #buttonElement
    #parentElement
    #radioButtonMale
    #radioButtonFemale
    constructor(parentId) {
        this.#parentElement = document.getElementById(parentId);
        this.#fillSection();
        this.#buttonElement = document.getElementById('button-id');
        this.#radioButtonMale = document.getElementById('radio-button-male');
        this.#radioButtonFemale = document.getElementById('radio-button-female');
    }
    #fillSection() {
        this.#parentElement.innerHTML =
        `<button id="button-id">Add random employee data</button>
         `
    }
    buttonHasPressed() {
        return new Promise(resolved => {
            this.#buttonElement.onclick = () => resolved();
        })
    }
    isMale() {
        res = this.#radioButtonMale.checked;
        this.#radioButtonMale.checked = false;
        this.#radioButtonFemale.checked = false;
        }
    }