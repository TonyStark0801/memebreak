var url;
var reloadInterval;

const slider = document.getElementById("slider");
const value = document.getElementById("value");
const doneButton = document.getElementById("done-button");

value.innerHTML = "Time in minutes: " + slider.value;

slider.oninput = (e) => {
    value.innerHTML = "Time in minutes: " + e.target.value;
};

doneButton.onclick = (e) => {
    reloadInterval = slider.value * 60 * 1000;
    if (slider.value == 1)
        alert("Time set! You'll be notified with memes in a minute");
    else
        alert(
            "Time set! You'll be notified with memes in " + slider.value + " minutes."
        );
    window.close();
};