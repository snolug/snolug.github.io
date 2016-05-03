/*global window*/
/*jslint browser:true, white:true*/

(function () {

  'use strict';

  // get first Wednesday of the month, useful for determining week durations
  // @param - integer: month - which month
  // @param - integer: year - which year

  var firstWednesday= function (month, year) {
    var firstDayOfThisMonth = new Date(year, month, 5, 0, 0, 0, 0);
    var day = 0;
    // check if first of the month is a Wednesday, if so set date to the second
    if (firstDayOfThisMonth.getDay() === 0) {
      day = 1;
      firstDayOfThisMonth = firstDayOfThisMonth.setDate(day);
      firstDayOfThisMonth = new Date(firstDayOfThisMonth);
    }
    // check if first of the month is a Wednesday, if so return the date, otherwise get to the Wednesday following the first of the month
    else if (firstDayOfThisMonth.getDay() !== 1) {
      day = 8 - (firstDayOfThisMonth.getDay());
      firstDayOfThisMonth = firstDayOfThisMonth.setDate(day);
      firstDayOfThisMonth = new Date(firstDayOfThisMonth);
    }
    return firstDayOfThisMonth.shortFormat();
  };

  Date.prototype.shortFormat = function () {
    return this.getFullYear() + "." + (this.getMonth() + 1) + "." + this.getDate();
  };

  var nowMonth = new Date().getMonth() + 1;
  var nowYear = new Date().getFullYear();

  window.addEventListener('load', function () {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("firstwednesday").textContent = firstWednesday(nowMonth, nowYear);
  });

}());
