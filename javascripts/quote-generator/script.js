document.addEventListener("DOMContentLoaded", () => {
    const adviceContainer = document.getElementById("advice");
    const newAdviceButton = document.getElementById("new-advice-button");
    // const loader = document.getElementById("loader");
    const message = document.getElementById("message");
    let adviceCount = 0;

    function fetchAdvice() {
        // loader.classList.remove("hidden");
        fetch("https://api.adviceslip.com/advice")
            .then((response) => response.json())
            .then((data) => {
                adviceContainer.innerHTML = `<i class="fa fa-quote-left"></i> ${data.slip.advice}`;
                // loader.classList.add("hidden");
                adviceCount++;
                message.innerHTML = `You have read <strong>${adviceCount}</strong> pieces of advice`;
            })
            .catch((error) => {
                console.error("Error fetching advice:", error);
                // loader.classList.add("hidden");
            });
    }

    newAdviceButton.addEventListener("click", fetchAdvice);
});
