function getSunday() {
  now = new Date();
  var day = now.getDay(),
      diff = now.getDate() - day + (day === 0 ? -7 : 1);
  return new Date(now.setDate(diff));
}

document.getElementById("firstsunday").textContent = getSunday();


window.onload = function () {
  document.getElementById("currentyear").textContent = new Date().getFullYear();
};
