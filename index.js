const dateEl = document.getElementById("date");
const dayEl = document.getElementById("day");
const timeEl = document.getElementById("time");

updateTime();
let timerID = setInterval(updateTime, 1000);
function updateTime() {
  date = new Date();
  updateElementsToDom();
}

//function to convert given input date to yyyy-mm-dd format and return it
function convertToDate(date) {
  let dd = date.getDate();
  let yyyy = date.getFullYear();
  let mm = date.getMonth();
  return yyyy + "-" + mm + "-" + dd;
}

//function to convert given input date to time hh:mm:ss
function convertToTime(date) {
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  if (sec < 10) return hr + ":" + min + ":" + "0" + sec;
  if (min < 10) return hr + ":" + "0" + min + ":" + sec;
  if (hr < 10) return "0" + hr + ":" + min + ":" + sec;
  return hr + ":" + min + ":" + sec;
}

//function to update the dom with the current date
function updateElementsToDom() {
  const displayDate = convertToDate(date);
  const day = date.toLocaleString("en-us", { weekday: "long" });
  const time = convertToTime(date);
  dateEl.textContent = `${displayDate}`;
  dayEl.textContent = `${day}`;
  timeEl.textContent = `${time}`;
}
