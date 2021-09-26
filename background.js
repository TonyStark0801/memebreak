var url;
var reloadInterval;

const slider = document.getElementById("slider");
const value = document.getElementById("value");
const doneButton = document.getElementById("done-button");

value.innerHTML = "Time: " + slider.value + " minutes";

slider.oninput = (e) => {
    value.innerHTML = "Time: " + e.target.value + " minutes";
};

doneButton.onclick = (e) => {
    reloadInterval = slider.value * 60 * 1000;
    if (slider.value == 1)
        alert("Time set! You'll be updated with memes in a minute");
    else
        alert(
            "Time set! You'll be updated with memes in " + slider.value + " minutes."
        );
    window.close();
};

function window_opener() {
    chrome.windows.create({
        url: "memes.html",
        focused: true,
        type: "popup",
    });
}
setTimeout(window_opener, 5000);