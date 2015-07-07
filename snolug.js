// get first Sunday of the month, useful for determining week durations
// @param - integer: month - which month
// @param - integer: year - which year
function firstSunday(month, year) {
    var firstDayOfThisMonth = new Date(year, month, 1, 0, 0, 0, 0);
    var day = 0;
    // check if first of the month is a Sunday, if so set date to the second
    if (firstDayOfThisMonth.getDay() === 0) {
        day = 1;
        firstDayOfThisMonth = firstDayOfThisMonth.setDate(day);
        firstDayOfThisMonth = new Date(firstDayOfThisMonth);
    }
    // check if first of the month is a Sunday, if so return the date, otherwise get to the Sunday following the first of the month

    else if (firstDayOfThisMonth.getDay() !== 1) {
        day = 8 - (firstDayOfThisMonth.getDay());
        firstDayOfThisMonth = firstDayOfThisMonth.setDate(day);
        firstDayOfThisMonth = new Date(firstDayOfThisMonth);
    }
    return firstDayOfThisMonth.shortFormat();
}

Date.prototype.shortFormat = function () {
    return this.getFullYear() + "." + (this.getMonth() + 1) + "." + this.getDate();
};

var nowMonth = new Date().getMonth() + 1;
var nowYear = new Date().getFullYear();

window.onload = function () {
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("firstsunday").textContent = firstSunday(nowMonth, nowYear);
};
