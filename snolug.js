// get first Sunday of the month, useful for determining week durations
// @param - integer: month - which month
// @param - integer: year - which year
function firstSunday(month, year) {
    var d = new Date(year, month, 1, 0, 0, 0, 0);
    var day = 0;
    // check if first of the month is a Sunday, if so set date to the second
    if (d.getDay() === 0) {
        day = 1;
        d = d.setDate(day);
        d = new Date(d);
    }
    // check if first of the month is a Sunday, if so return the date, otherwise get to the Sunday following the first of the month

    else if (d.getDay() != 1) {
        day = 8 - (d.getDay());
        d = d.setDate(day);
        d = new Date(d);
    }
    return d.shortFormat();
}

Date.prototype.shortFormat = function () {
    return (this.getMonth() + 1) + "/" + this.getDate() + "/" + this.getFullYear();
};

var nowMonth = new Date().getMonth() + 1;
var nowYear = new Date().getFullYear();

window.onload = function () {
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("firstsunday").textContent = firstSunday(nowMonth, nowYear);
};
