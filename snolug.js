function getFirstSunday() {
    now = new Date();
    day = now.getDay();
    diff = now.getDate() - day + (day === 0 ? -6 - 7 : 0 - 7);
    return new Date(now.setDate(diff));
}

document.getElementById("firstsunday").textContent = getFirstSunday();

window.onload = function () {
  document.getElementById("currentyear").textContent = new Date().getFullYear();
};
