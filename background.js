const value = document.getElementById("value");
const slider = document.getElementById("slider");
const doneButton = document.getElementById("done-button");
var y;

value.innerHTML = "Time: " + slider.value + " minutes";

slider.oninput = (e) => {
    value.innerHTML = "Time: " + e.target.value + " minutes";
};

doneButton.onclick = (e) => {
    y = slider.value * 6 * 100;
    if (slider.value == 1)
        alert("Time set! You'll be updated with memes in a minute" + y);
    else alert("Time set! You'll be updated with memes in " + y + " minutes.");
    console.log("hi");
    timeout();

    function timeout() {
        setTimeout(function() {
            windowOpener();
        }, y);
        clearInterval();
    }
    // window.close();
};

function windowOpener() {
    chrome.windows.create({
        url: "memes.html",
        focused: true,
        type: "popup",
    });
}
