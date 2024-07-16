// To Render Time for Analogue Clock

function getAnalogueTime() {
    let numberList = document.querySelectorAll(".number");
    let rotateAngle = 0;
    console.log(numberList);
    for (let num of numberList) {
        num.style.transform = `rotate(${rotateAngle.toString()}deg)`; // enetered in js for using the rotate variable mode for this css statement
        let paraEle = num.querySelector("p");
        paraEle.style.transform = `rotate(${-rotateAngle.toString()}deg)`;
        rotateAngle += 30;
    }
}

function setSeconds() {
    let now = new Date();
    let secs = now.getSeconds();
    let mins = now.getMinutes();
    let hrs = now.getHours();
    let periodEle = document.querySelector(".period-analogue");
    periodEle.textContent = "AM";
    if (hrs > 12) {
        hrs -= 12;
        periodEle.textContent = "PM";
    }
    // let degS = secs * 6;
    // let degM = mins * 6;
    // let degH = hrs * 30;
    let secDeg = secs * 6;
    let minDeg = mins * 6 + secs / 10;
    let hourDeg = hrs * 30 + mins / 2;
    let secHand = document.querySelector("#seconds");
    let minHand = document.querySelector("#minutes");
    let hrHand = document.querySelector("#hours");
    secHand.style.transform = `rotate(${secDeg.toString()}deg) translateY(-2.5rem)`;
    minHand.style.transform = `rotate(${minDeg.toString()}deg) translateY(-2.5rem)`;
    hrHand.style.transform = `rotate(${hourDeg.toString()}deg) translateY(-2.5rem)`;
}

setInterval(setSeconds, 100);
getAnalogueTime();

// To Render Date for Analogue Clock

function getAnalogueDate() {
    let date_time = new Date();
    let date = date_time.getDate();
    let month = date_time.toLocaleString("default", { month: "long" });
    let year = date_time.getFullYear();
    document.querySelector("#analogue .date-dd").textContent = date;
    document.querySelector("#analogue .date-mm").textContent = month;
    document.querySelector("#analogue .date-yy").textContent = year;

    setInterval(getAnalogueDate, 1000 * 60 * 60 * 24);
}

getAnalogueDate();

// To Render Day for Analogue Clock

function getAnalogueDay() {
    let date_time = new Date();
    let day = date_time.toLocaleString("default", { weekday: "long" });
    document.querySelector("#analogue .day-analogue").textContent = day;
}

getAnalogueDay();
