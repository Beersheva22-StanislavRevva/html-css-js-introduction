// async function getTemperatures(lat, long) {
//     const response =
//     await fetch(`https://api.open-meteo.com/v1/gfs?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m&timezone=IST`);
//     return response.json();
// }
// getTemperatures(52.52, 13.41).then((data) => console.log(data.hourly.temperature_2m[20]))
// .catch(error => console.log('kuku'));
async function getTemperatures(lat, long, startDate, days, hourFrom, hourTo) {
    //Params: lat - latitude, long - longitude, startDate - ISO date of forecast
    //days - forecast days, hourFrom, hourTo - range of the hours for each day
    //returns:
    //array of objects {date: <string containing date -YYYYMM-DD with no tume>, 
    //time: <hour number from the given range>, temperature: <number>, apperent temperature: <nmber>}
    
    const endDate = getEndDate(startDate, days);
    const url = getUrl(lat, long, startDate, endDate);
    const response = await fetch(url);
    const data = await response.json();
    const dates = getDataForHours(data.hourly.time, hourFrom, hourTo);
    const temperatures = getDataForHours(data.hourly.temperature_2m, hourFrom, hourTo);
    const apparentTemperatures = getDataForHours(data.hourly.apparent_temperature, hourFrom, hourTo);
    return dates.map((d, index) => {
        const tokens = d.split("T");
        const date = tokens[0];
        const time = tokens[1];
        return {date, time, temperature: temperatures[index],
             apparentTemperature: apparentTemperatures[index]};
    })

}
function getEndDate(startDateStr, days) {
    const startDate = new Date(startDateStr);
    const endDate = new Date(startDate.setDate(startDate.getDate() + days));
    return endDate.toISOString().substring(0, 10);
}
function getUrl(lat, long, startDate, endDate) {
    return `https://api.open-meteo.com/v1/gfs?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature&timezone=IST&start_date=${startDate}&end_date=${endDate}`
}
function getDataForHours(array, hourFrom, hourTo) {
    return array.filter((__, index) => {
        const rem = index % 24;
        return rem >= hourFrom && rem <= hourTo
    })
}
