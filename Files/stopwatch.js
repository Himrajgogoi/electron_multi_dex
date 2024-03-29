var startTime = null;
const secondsInMinute = 60;
const secondsInHour = 60*60;

var seconds = document.getElementById("seconds");
var minutes = document.getElementById("minutes");
var hours = document.getElementById("hours");
var stopped = document.getElementById("stop");
var start = document.getElementById("start");
var reset = document.getElementById("reset");


function getString(n){
    if(n< 10){
        return "0" + String(n);
    }
    else{
        return String(n);
    }
}

function setTime(h,m,s){
    hours.innerText = getString(h);
    minutes.innerText = getString(m);
    seconds.innerText = getString(s);
}

function updateTime(){
    var diff = Math.floor((Date.now() - startTime)/1000);
    var hours = Math.floor(diff/secondsInHour);
    diff = diff - hours*secondsInHour;
    var minutes = Math.floor(diff/secondsInMinute);
    diff = diff - minutes*secondsInMinute;
    var seconds = diff;
    setTime(hours, minutes, seconds);
}

function getOffset(){
    var s = Number(seconds.innerText, 10);
    var m = Number(minutes.innerText, 10);
    var h = Number(hours.innerText, 10);
    var offset = h*secondsInHour + m*secondsInMinute + s;
    var offsetInMs = offset * 1000;
    return offsetInMs;
}

function getStartTime(){
    var offset = getOffset();
    var now = Date.now();
    var sTime = now - offset;
    return sTime;
}

function resetTime(){
    seconds.innerHTML = "00";
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
}

function startTimer(){
    startTime = getStartTime();
    interval = setInterval(updateTime, 100)
}

function stopTimer(){
    clearInterval(interval);
    interval = null;
}

start.addEventListener("click", function(){
    startTimer();
})

stopped.addEventListener("click", function(){
    stopTimer();
})

reset.addEventListener("click", function(){
    stopTimer();
    resetTime();
})
