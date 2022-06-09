const value = document.getElementById("value");
const slider = document.getElementById("slider");
const doneButton = document.getElementById("done-button");
var y;


//Changing values as per slider
slider.oninput = (e) => {
    value.innerHTML = "Time: " + e.target.value + " Mins";
};

//Getting event from done button
var x = document.getElementById("done-button")
x.addEventListener('click',function(){
    x.style.display="none";           //Disappear Done button
    y = slider.value ;                //storing value of slider

    //String replacing done button
    if (slider.value == 1)
    document.getElementById("afterclick").innerText=`Time set! You'll be updated with memes in ${y} Minute`
    else
    document.getElementById("afterclick").innerText=`Time set! You'll be updated with memes in ${y} Minute`

    //alarm information
    var alarmInfo={
        delayInMinutes: parseInt(y)
    
    }
    //create alarm
    chrome.alarms.create("memes",alarmInfo)
    
    //Automatically disappear popup after 1 second
    setTimeout(() => {  window.close() }, 1000);
});
