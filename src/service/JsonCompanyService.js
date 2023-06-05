import { count } from "../util/number-functions.js";
import { getRandomInt } from "../util/random.js";
const minId = 100000;
const maxId = 1000000;
const URL = 'http://localhost:3500/employees';


export default class JsonCompanyService {
    #employees;
   
    constructor() {
        this.#employees = {};
    }
    addEmployee(employee) {
        //const id = this.#getId();
        // return getPromise(fetch(URL, {
        //     method: 'POST',
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(employee)
        // }).then(response => response.json()), 150);
        fetch(URL, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(employee)
        }).then(response => response.json()).then(data => getPromise(data,150));

    }
    // #getId() {
    //     let id;
    //     do {
    //         id = getRandomInt(minId, maxId);
    //     }while(this.#getOne(id));
    //     return id;
    // }
    #getOne(id) {
        const urlOne = URL+`${id}`;
      return  fetch(urlOne).then(response => response.json()); 
    }

    getStatistics(field, interval) {
        let array = Object.values(this.getAllEmployees());
        const currentYear = new Date().getFullYear();
        
        if (field == 'birthYear') {
            array = array.map(e => ({'age': currentYear - e.birthYear}));
            field = 'age';
        }
        const statisticsObj = count(array, field, interval);
        // return getPromise(Object.entries(statisticsObj).map(e => {
        //     const min = e[0] * interval;
        //     const max = min + interval - 1;
        //     return {min, max, count: e[1]};
        // }), 1000)
         return Object.entries(statisticsObj).map(e => {
            const min = e[0] * interval;
            const max = min + interval - 1;
            return {min, max, count: e[1]};
        });
    }
    getAllEmployees() {
        // return getPromise(fetch(URL).then(response => response.json()), 1000)
        return fetch(URL).then(response => response.json());
    }
}
function getPromise(state, timeout) {
    return new Promise(resolve => setTimeout(() => resolve(state), timeout))
}