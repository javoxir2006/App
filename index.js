// interacting nav icons

const countDisplay = document.querySelector(".countDisplay");
const progressDisplay = document.querySelector(".progressDisplay");
const settingsDisplay = document.querySelector(".settingsDisplay");

function countDis(){
    countDisplay.style.display = 'flex';
    progressDisplay.style.display = 'none';
    settingsDisplay.style.display = 'none';
}

function progressDis(){
    countDisplay.style.display = 'none';
    progressDisplay.style.display = 'flex';
    settingsDisplay.style.display = 'none';
}

function settingsDis(){
    countDisplay.style.display = 'none';
    progressDisplay.style.display = 'none';
    settingsDisplay.style.display = 'flex';
}