const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const ending = "21 Nov 2022";

function countdown(){
    const endingDate = new Date(ending);
    const currentDate = new Date();

    const totalSeconds = (endingDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours =  Math.floor(totalSeconds / 3600) % 24;
    const minutes =  Math.floor(totalSeconds / 60) % 60;
    const seconds =  Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = fomratTime(hours);
    minutesEl.innerHTML = fomratTime(minutes);
    secondsEl.innerHTML = fomratTime(seconds);

}

function fomratTime(time){
    return time < 10 ? '0${time}' : time;
}

countdown();

setInterval(countdown, 1000);