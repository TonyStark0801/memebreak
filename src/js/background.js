chrome.alarms.onAlarm.addListener(function() {
    chrome.windows.create({
        url: "../../src/html/memes.html",
        focused: true,
        type: "popup",
        height:550,
        width:750
    });
});