const value = document.getElementById("value");
const slider = document.getElementById("slider");
var doneButton = document.getElementById("done-button")
var time;


//Changing values as per slider
slider.oninput = (e) => {
    value.innerHTML = "Time: " + e.target.value + " Mins";
};

//Getting event from done button
doneButton.addEventListener('click',function(){
    doneButton.style.display="none";           //Disappear Done button
    time = slider.value ;                      //storing value of slider

    //String replacing done button
    if (slider.value == 1)
        document.getElementById("afterclick").innerText=`Time set! You'll be updated with memes in ${time} Minute`
    else
        document.getElementById("afterclick").innerText=`Time set! You'll be updated with memes in ${time} Minute`

    //alarm information
    var alarmInfo = {
        delayInMinutes: parseInt(time)
    }

    //create alarm
    chrome.alarms.create("memes",alarmInfo)

    //Automatically disappear popup after 1 second
    setTimeout(() => { window.close() }, 1000);
});
