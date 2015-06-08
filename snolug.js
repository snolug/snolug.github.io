function getSunday(now) {
  now = new Date(now);
  var day = now.getDay(),
    diff = now.getDate() - day + (day === 0 ? -7:1);
  return new Date(now.setDate(diff));
}

document.getElementById("firstsunday").textContent = getSunday(new Date());
