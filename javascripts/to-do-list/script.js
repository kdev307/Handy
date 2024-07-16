// Creating close buttons on the created tasks
let listItems = document.querySelectorAll("li");

for (let i = 0; i < listItems.length; i++) {
    let span = document.createElement("span");
    span.className = "close";
    span.appendChild(document.createTextNode("\u00D7")); // Unicode for ✕
    listItems[i].appendChild(span);
}

// Removing Item Feature
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("close")) {
        let listItem = event.target.parentElement;
        listItem.style.display = "none";
    }
});

// Adding Checked Feature for Completed Tasks
document.querySelector("ul").addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    }
});

// Function to add new items
function addItems(task) {
    let liEle = document.createElement("li");
    let inputTxt = document.createTextNode(task);
    liEle.appendChild(inputTxt);

    if (task === "") {
        alert("Please Enter a Task!");
        return;
    }

    let spanEle = document.createElement("span");
    let crossTxt = document.createTextNode("\u00D7");
    spanEle.className = "close";
    spanEle.appendChild(crossTxt);
    liEle.appendChild(spanEle);

    document.querySelector("ul").appendChild(liEle);

    // Adding event listener to the new close button
    spanEle.addEventListener("click", function () {
        liEle.style.display = "none";
    });

    // Clear input after adding task
    document.getElementById("addItem").value = "";
}

// Event listeners for adding new tasks
document.addEventListener("DOMContentLoaded", function () {
    // Event Listener for button click
    document.querySelector(".add-btn").addEventListener("click", function () {
        let task = document.getElementById("addItem").value;
        addItems(task);
    });

    // Event Listener for enter key
    document.getElementById("addItem").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            let task = this.value;
            addItems(task);
        }
    });
});
