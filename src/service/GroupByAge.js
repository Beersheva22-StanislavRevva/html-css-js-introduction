export function GroupByAge (employees) {
const birthYearsGroups = calculateResults(employees);
const keys = ['2','3','4','5'];
return res = [{min:20, max:29, count: birthYearsGroups.keys[0]},
       {min:30, max:39, count: birthYearsGroups.keys[1]},
       {min:40, max:49, count: birthYearsGroups.keys[2]},
       {min:50, max:59, count: birthYearsGroups.keys[3]},
]
}
function calculateResults(employees) {
    return employees.map(e => {
        return Marh.floor((2023 - e.birthYear)/10)
    })
    .reduce((obj, s) => ({...obj, [s]: obj[s] ? obj[s] + 1 : 1}), {});
}