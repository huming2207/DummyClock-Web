"use strict";

var clockTimerToken = setInterval(clockTimer, 1000);

function clockTimer() {
    var currentDate = new Date();
    document.getElementById("time-string").innerHTML = currentDate.toLocaleTimeString();
    document.getElementById("week-string").innerHTML = currentDate.toDateString();
}