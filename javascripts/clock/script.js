// To Create a Toggling Slider for Analgoue and Digital Clock

let analogBtn = document.getElementById("analogue-btn");
let digitalBtn = document.getElementById("digital-btn");
let slider = document.querySelector(".slider");
let clockBlock = document.querySelector(".clock-block");

analogBtn.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    clockBlock.classList.remove("clock-block-move");
});

digitalBtn.addEventListener("click", () => {
    slider.classList.add("moveslider");
    clockBlock.classList.add("clock-block-move");
});
