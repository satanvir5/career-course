let text;
text = "Hello Everyone! get ready for brand new js class. ";
let string_length = text.length;
let index = 0;
let timer;
function teletype() {
  let char = text.charAt(index);
  index = index + 1;

  if (string_length < index) {
    clearTimeout(timer);
  } else {
    window.document.getElementById("toggoleForSetTimeOut").innerHTML += char;
    console.log("count");

    timer = setTimeout(teletype, 150);
  }
}

function stopTimer() {
  clearTimeout(timer);
}

let clkForStart = window.document.getElementById("clkForStart");
clkForStart.addEventListener("click", teletype);

let clkForStop = window.document.getElementById("clkForStop");
clkForStop.addEventListener("click", stopTimer);

function teletypeAgain() {
  let char = text.charAt(index);
  index = index + 1;

  if (string_length < index) {
    clearInterval(timer);
  } else {
    window.document.getElementById("toggoleForSetInterval").innerHTML += char;
    console.log("count");

    timer = setInterval(teletypeAgain, 150);
  }
}

function stopTimerAgain() {
  clearInterval(timer);
}

let clkForStartAgain = window.document.getElementById("clkForStartAgain");
clkForStartAgain.addEventListener("click", teletypeAgain);

let clkForStopAgain = window.document.getElementById("clkForStopAgain");
clkForStopAgain.addEventListener("click", stopTimerAgain);
