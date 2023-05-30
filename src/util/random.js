export function getRandomInt(min, max) {
    if (min == max) {
        max++;
    } else if (min > max) {
        [min,max] = [max,min]
    }
    return Math.trunc(min + Math.random()*(max-min))
}
export function getRandomElement(array) {
    return array[getRandomInt(0, array.length)]
}
export function getRandomEmployee (emplGender) {
const departments = ['QA', 'Development', 'Audit', 'Accounting', 'Management', 'Sales'];
const names = ['John', 'Jake', 'Harry', 'Peter', 'Henry', 'Alex', 'Stan', 'George','Robert'];
    return {id: getRandomInt(100000, 1000000),
        name: names[getRandomInt(0, names.length)], birthYear: getRandomInt(1963,2004), gender: emplGender,
        salary: getRandomInt(7,31)*1000, department: departments[getRandomInt(0,departments.length)]}
}

 