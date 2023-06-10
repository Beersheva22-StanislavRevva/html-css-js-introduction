import CompanyService from "./service/CompanyService.js";
import ApplicationBar from "./ui/ApplicationBar.js";
import DataGrid from "./ui/DataGrid.js";
import EmployeeForm from "./ui/EmployeeForm.js";
import { getRandomEmployee } from "./util/random.js";
import statisticsConfig from "./config/statistics-config.json" assert{type: 'json'}
import popularConfig from "./config/popular-config.json" assert{type: 'json'}
import serviceConfig from "./config/service-config.json" assert{type: 'json'}
import { range } from "./util/number-functions.js";
import Spinner from "./ui/Spinner.js";
import CompanyServiceRest from "./service/CompanyServiceRest.js";
const N_EMPLOYEES = 100;
//employee model
//{id: number of 9 digits, name: string, birthYear: number,
// gender: female | male, salary: number, department: QA, Development, Audit, Accounting, Management}
const sections = [
    { title: "Popular Movies", id: "employees-table-place" },
    { title: "Search", id: "employees-form-place" },
    { title: "Log in", id: "statistics-place" }
];
const { minSalary, maxSalary, departments, minYear, maxYear } = popularConfig;
const { age, salary } = statisticsConfig;
const employeeColumns = [
    { field: 'myID', headerName: 'MyID' },
    { field: 'name', headerName: 'Name' },
    { field: 'year', headerName: 'Year' },
    { field: 'genre', headerName: 'Genre' },
    { field: 'popularity', headerName: 'Popularity' },
    { field: 'poster', headerName: 'Poster' }


];
const statisticsColumns = [
    { field: 'min', headerName: "Min value" },
    { field: 'max', headerName: "Max value" },
    { field: 'count', headerName: "Count" }
]
//objects
const menu = new ApplicationBar("menu-place", sections, menuHandler);
const companyService = serviceConfig.baseUrl ?new CompanyServiceRest(serviceConfig.baseUrl, dataChangeFn) : new CompanyService();
const spinner = new Spinner("spinner-place");
const employeeForm = new EmployeeForm("employees-form-place",popularConfig);
employeeForm.fillForm();
const updateForm = new EmployeeForm("form-update-place", popularConfig);
updateForm.addHandler(async (empl) => {
    const updatedEmpl = await action(companyService.updateEmployee.bind(companyService, empl));
    employeeTable.updateRow(updatedEmpl);
   
    updateForm.hideForm();
});
const employeeTable = new DataGrid("employees-table-place", employeeColumns, {title: "List of Employees", width:"80vw"},
 [{name: 'add to watchlist', callbackFn: removeEmployee}, {name: 'add to favorites', callbackFn: updateEmployee}]);
const ageStatistics = new DataGrid("age-statistics-place", statisticsColumns, {title: "Age Distribution", width:"30vw"});
const salaryStatistics = new DataGrid("salary-statistics-place", statisticsColumns, {title: "Salary Distribution", width:"30vw"});

employeeForm.addHandler(async (employee) => {
    
    await action(companyService.addEmployee.bind(companyService, employee));
})
function dataChangeFn(employees) {
    switch(menu.getActiveIndex()) {
        case 0: employeeTable.fillData(employees); break;
        case 2: statisticsProcessing(employees);
    }
}
async function menuHandler(index) {
    updateForm.hideForm();
    switch (index) {
        case 0: {
            const employees = await action(companyService.getAllEmployees
                .bind(companyService));
            employeeTable.fillData(employees);
            break;
        }
        case 2: {
            await statisticsProcessing();

            break;
        }
    }

}

async function statisticsProcessing(employees) {
    const ageStatisticsData = await action(companyService.
        getStatistics.bind(companyService, age.field, age.interval, employees));
    ageStatistics.fillData(ageStatisticsData);

    const salaryStatisticsData = await action(companyService.getStatistics.bind(companyService,
        salary.field, salary.interval, employees));
    salaryStatistics.fillData(salaryStatisticsData);
}

async function action(serviceFn) {
    spinner.start();
    try {
        const res = await serviceFn();
        return res;
    } catch (error) {
        alert(error.code ? 'servere responded with ' + code : 'server unavailable')
    } finally{
        spinner.stop();
    }
    
   
    
}
async function updateEmployee(id) {
    const empl = await companyService.getEmployee(id);
    updateForm.fillForm(empl);
}
async function removeEmployee(id) {
    if(confirm(`Removing Employee?
    You are going to remove employee with id=${id}`))
    {
        await action(companyService.removeEmployee.bind(companyService, id));
    employeeTable.removeRow(id)
}
}
async function generateFirstPage() {
    const employees = await companyService.getAllEmployees();
    // if (employees.length < 5) {
    //     for(let i = 0; i < N_EMPLOYEES; i++) {
    //         await companyService.addEmployee(getRandomEmployee(minSalary, maxSalary,
    //             minYear, maxYear, departments));
    //     }
   // }
    }
   
action(generateFirstPage);
