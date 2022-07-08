const daysE1 = document.getElementById('Days');
const hoursE1 = document.getElementById('Hours');
const minutesE1 = document.getElementById('Minutes');
const secondsE1 = document.getElementById('Seconds');

function countdown() {
    const newYearDate= new Date('Sun July 10 2022 18:00:00 GMT+0530 (India Standard Time)');
    const currentDate = new Date();
    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600)%24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const secs = Math.floor(totalSeconds) % 60;
    daysE1.innerHTML = days;
    hoursE1.innerHTML = formatTime(hours);
    minutesE1.innerHTML= formatTime(mins);
    secondsE1.innerHTML= formatTime(secs);
}
function formatTime(time) {
    return time < 10 ? `0${time}`: time;
}
setInterval(countdown, 1000);
countdown();

