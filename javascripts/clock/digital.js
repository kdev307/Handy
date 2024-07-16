// To Render Time for Digital Clock

function getDigitalTime() {
    let date_time = new Date();
    let hrs = date_time.getHours();
    let mins = date_time.getMinutes();
    let secs = date_time.getSeconds();
    let period = "AM";

    if (hrs == 0) hrs = 12;
    if (hrs > 12) {
        hrs -= 12;
        period = "PM";
    }

    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;

    document.querySelector("#digital .time-hh").textContent = hrs;
    document.querySelector("#digital .time-mm").textContent = mins;
    document.querySelector("#digital .time-ss").textContent = secs;
    document.querySelector("#digital .time-period").textContent = period;
    setInterval(getDigitalTime, 1000);
}

getDigitalTime();

// To Render Date for Digital Clock

function getDigitalDate() {
    let date_time = new Date();
    let date = date_time.getDate();
    let month = date_time.toLocaleString("default", { month: "long" });
    let year = date_time.getFullYear();
    document.querySelector("#digital .date-dd").textContent = date;
    document.querySelector("#digital .date-mm").textContent = month;
    document.querySelector("#digital .date-yy").textContent = year;

    setInterval(getDigitalDate, 1000 * 60 * 60 * 24);
}

getDigitalDate();

// To Render Day for Digital Clock

function getDigitalDay() {
    let date_time = new Date();
    let day = date_time.toLocaleString("default", { weekday: "long" });
    document.querySelector("#digital .day-digital").textContent = day;
}

getDigitalDay();
