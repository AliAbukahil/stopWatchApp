window.onload = function () {
  let seconds = 00;
  let tens = 00;
  let appendTens = document.querySelector("#tens");
  let appendSeconds = document.querySelector("#seconds");
  let buttonStart = document.querySelector("#button-start");
  let buttonStop = document.querySelector("#button-stop");
  let buttonReset = document.querySelector("#button-reset");
  let Interval;

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };

  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
};

// Digital clock

setInterval(function () {
  getTime();
}, 1000);

function getTime() {
  var today = new Date();
  document.getElementById("dw2").innerHTML =
    today.getHours() +
    ":" +
    checkTime(today.getMinutes()) +
    ":" +
    checkTime(today.getSeconds());
}

function checkTime(v) {
  return v > 9 ? v : "0" + v;
}
