const SetWakeUpTime = document.getElementById("SetWakeUpTime");
const SetLunchTime = document.getElementById("SetLunchTime");
const SetNapTime = document.getElementById("SetNapTime");
const SetNightTime = document.getElementById("SetNightTime");

const Message = document.getElementById("Message");
const AlarmButton = document.getElementById("AlarmButton");
const Poster = document.getElementById("Poster");
const Message2 = document.getElementById("Message2");


const Clock_Hour = document.getElementById("Clock_Hour");
const Clock_Minute = document.getElementById("Clock_Minute");
const Clock_Second = document.getElementById("Clock_Second");
const Clock_AMPM = document.getElementById("Clock_AMPM");

const WakeUPTiming = document.getElementById("WakeUPTiming");
const LunchTiming = document.getElementById("LunchTiming");
const NapTiming = document.getElementById("NapTiming");
const NightTiming = document.getElementById("NightTiming");



function setTime() {
    let newDate = new Date();
    let newHour = newDate.getHours();
    let newMin = newDate.getMinutes();
    let newSec = newDate.getSeconds();
    let dayTime = "AM";


    if (newHour >= 12 && newHour < 16) {
        Message.innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP"
    }
    if (newHour >= 16 && newHour < 20) {
        Message.innerText = "GOOD EVENING !!"
    }
    if (newHour >= 20 && newHour < 24) {
        Message.innerText = "GOOD NIGHT !!"
    }

    if (newHour >= 12) {
        dayTime = "PM";
    }


    if (newHour > 12) {
        newHour -= 12;
    }


    if (newMin <= 9) {
        newMin = '0' + newMin;
    }

    if (newSec <= 9) {
        newSec = '0' + newSec;
    }
    if (newHour == 0) {
        newHour = 12;
    }
    Clock_Hour.innerText = newHour;
    Clock_Minute.innerText = newMin;
    Clock_Second.innerText = newSec;
    Clock_AMPM.innerText = dayTime;
}

setInterval(setTime, 1000);



AlarmButton.addEventListener('mouseover', () => {
    AlarmButton.innerHTML = "Party time!";
})

AlarmButton.addEventListener('mouseout', () => {
    AlarmButton.innerHTML = "Set Alarm";
})
AlarmButton.addEventListener('click', () => {
    let date = new Date();
    let hours = date.getHours();

    let wakeUpSelectedIndex = SetWakeUpTime.selectedIndex;
    let lunchSelectedIndex = SetLunchTime.selectedIndex;
    let napSelectedIndex = SetNapTime.selectedIndex;
    let nightSelectedIndex = SetNightTime.selectedIndex;


    WakeUPTiming.innerText = SetWakeUpTime.children[wakeUpSelectedIndex].innerText;
    LunchTiming.innerText = SetLunchTime.children[lunchSelectedIndex].innerText;
    NapTiming.innerText = SetNapTime.children[napSelectedIndex].innerText;
    NightTiming.innerText = SetNightTime.children[nightSelectedIndex].innerText;

    if (Number(SetLunchTime.value) === hours) {
        Message2.innerText = "LET'S HAVE SOME LUNCH !!";
        Poster.src = "./Images/LunchPoster.svg";
    }
    else if (Number(SetNapTime.value) === hours) {
        Message2.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        Poster.src = "./Images/lunch_image.png";
    }
    else if (Number(SetNightTime.value) === hours) {
        Message2.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        Poster.src = "./Images/NightPoster.svg";
    } else {
        Message2.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
        Poster.src = "./Images/WakeUpPoster.svg";
    }
})