const daysNode = document.querySelector("#days");
const hoursNode = document.querySelector("#hours");
const minutesNode = document.querySelector("#minutes");
const secondsNode = document.querySelector("#seconds");

setInterval(() => {
  currDate = new Date();
  newYearDate = new Date(2023, 11, 31, 23, 59, 59);

  daysGet();
  hoursGet();
  minutesGet();
  secondsGet();
}, 1000);

function daysGet() {
  let remainingDays = newYearDate.getDate() - currDate.getDate();

  daysNode.innerHTML = remainingDays.toLocaleString();
}
function hoursGet() {
  let remainingHours = newYearDate.getHours() - currDate.getHours();

  hoursNode.innerHTML = remainingHours.toLocaleString();
}
function minutesGet() {
  let remainingMinutes = newYearDate.getMinutes() - currDate.getMinutes();

  minutesNode.innerHTML = remainingMinutes.toLocaleString();
}
function secondsGet() {
  let secondsGet = newYearDate.getSeconds() - currDate.getSeconds();

  secondsNode.innerHTML = secondsGet.toLocaleString();
}
