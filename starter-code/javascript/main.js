var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
function printTime() {
    printSeconds();
    printMinutes();
}

function printMinutes() {
    let min = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minUni.innerHTML = min.slice(1, 2);
    minDec.innerHTML = min.slice(0, 1);
    return 
}

function printSeconds() {
    let sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secUni.innerHTML = sec.slice(1, 2);
    secDec.innerHTML = sec.slice(0, 1);

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    let sBtn = document.getElementsByTagName('button');
    if (sBtn[0].classList.contains("start")) {

        sBtn[0].classList.add('stop');
        sBtn[0].classList.remove('start');

        sBtn[1].classList.add('split');
        sBtn[1].classList.remove('reset');

        sBtn[0].innerHTML = "STOP";

        sBtn[1].innerHTML = "SPLIT";

        chronometer.startClick();
        setInterval(printTime, 1000);

    }

    else {
        sBtn[0].classList.add('start');
        sBtn[0].classList.remove('stop');

        sBtn[1].classList.add('reset');
        sBtn[1].classList.remove('split');

        sBtn[0].innerHTML = "START";

        sBtn[1].innerHTML = "RESET";

        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    let list = document.getElementById('splits');
    let sBtn = document.getElementsByTagName('button');
    if (sBtn[1].classList.contains("reset")) {
        chronometer.resetClick();
        list.innerHTML = '';
    }
    else {
        list.innerHTML += `<li>${minDec.innerHTML}${minUni.innerHTML}:${secDec.innerHTML}${secUni.innerHTML}</li>`;
    }

});
