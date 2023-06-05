import employeesConfig from "../config/employees-config.json" assert{type: 'json'};
export default class EmployeeForm {
    #dataObj;
    #formElement;
    #departmentElement;
    constructor(parentId) {
        const parentElement = document.getElementById(parentId);
        this.#dataObj = {name: "name",
    department: "QA", salary: 5000, birthYear: 2000, checkbox: 1}
    this.#fillForm(parentElement, parentId);
    this.#setDepartmentElement();
    this.#setElements(parentId);
    }
    #fillForm(parentElement, parentId) {
        parentElement.innerHTML =
            `<form class="form-control" id="${parentId}-form-id">
            <div class="radio-group">
                <div class="radio-control">
                     <input id="female-id" type="radio" name="gender" value="female" required unchecked>
                    <label for="femail-id">female</label>
                </div>
                <div class="radio-control">
                    <input id = "male-id" type="radio" name="gender" value="male" required unchecked>
                     <label for="mail-id">male</label>    
                </div>
            </div>
            <input type="text" name = "name" placeholder = "Enter name">
            <input type="number" name="salary" min = "7000" max = "50000" placeholder = "Enter salary" >
            <input type="number" name="birthYear" min = "1956" max = "2005" placeholder = "Enter year of birth" >
            <select id="department" name="department" class="select-contol" required></select>
            <button type = "submit" >Submit</button>
            </form>
            `
    }
    #setElements(parentId) {
        this.#formElement = document.getElementById(`${parentId}-form-id`)
    }
    #setDepartmentElement () {
        this.#departmentElement = document.getElementById("department");
        setOptionItems(this.#departmentElement, employeesConfig.departments, "select department");
    }
    addHandler(submitFn) {
        this.#formElement.onsubmit = async (event) => {
            event.preventDefault();
            const formData = new FormData(this.#formElement);
            this.#dataObj.gender = formData.get('gender');
            this.#dataObj.salary = formData.get('salary');
            this.#dataObj.name = formData.get('name');
            this.#dataObj.department = formData.get('department');
            this.#dataObj.checkbox = 'check';                   
            //check input data here
            await submitFn(this.#dataObj);
            this.#formElement.reset();
        }
    }
}
function setOptionItems(element, options, placeholder) {
    element.innerHTML = `<option value hidden selected>--${placeholder}--</option>`;
    element.innerHTML += options.map(o => `<option value="${o}">${o}</option>`).join('')
}