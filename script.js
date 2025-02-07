let timer;
let isRunning = false;
let elapsedTime = 0;
let lapCount = 1;

const timeDisplay = document.getElementById('time');
const startStopButton = document.getElementById('startStop');
const lapButton = document.getElementById('lap');
const lapList = document.getElementById('lapList');

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        startStopButton.textContent = 'Start';
        isRunning = false;
    } else {
        timer = setInterval(updateTime, 1000);
        startStopButton.textContent = 'Stop';
        isRunning = true;
    }
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    lapCount = 1;
    timeDisplay.textContent = formatTime(elapsedTime);
    lapList.innerHTML = '';
    startStopButton.textContent = 'Start';
}

function lap() {
    if (isRunning) {
        const lapTime = formatTime(elapsedTime);
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
        lapList.appendChild(lapItem);
        lapCount++;
    }
}

function updateTime() {
    elapsedTime++;
    timeDisplay.textContent = formatTime(elapsedTime);
}

function formatTime(seconds) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
}
