/*VARIABLES NEEDED IN WHOLE SCOPE*/
let hour = 0;
let minute = 0;
let second = 0;


const settings = {
    secondsEnabled : true,
    musicEnabled : true,
    soundEffectsEnabled : true,
    timeLocationDetermination : 0
}

let ssdTimeFont = [0x1FBF0, 0x1FBF1, 0x1FBF2, 0x1FBF3, 0x1FBF4, 0x1FBF5, 0x1FBF6, 0x1FBF7, 0x1FBF8, 0x1FBF9]; /*hexadecimal font codes for the seven segment display*/

function displayTime() {
    let longTime = [];

    /*deal with hour not having double digits first*/
    if (hour < 10) {
        longTime.push(0);
        longTime.push(Number(hour));
    } else {
        let dominantHour = String(hour).charAt(0);
        longTime.push(dominantHour);
        longTime.push(Number(hour) % (dominantHour * 10));
    }

    /*handle minutes possibly not containing double digits*/
    if (minute < 10) {
        longTime.push(0);
        longTime.push(Number(minute));
    } else {
        let dominantMinute = String(minute).charAt(0);
        longTime.push(dominantMinute);
        longTime.push(Number(minute) % (dominantMinute * 10));
    }


    if (settings.secondsEnabled) {
        if (second < 10) {
            longTime.push(0);
            longTime.push(Number(second));
        } else {
            let dominantSecond = String(second).charAt(0);
            longTime.push(dominantSecond);
            longTime.push(Number(second) % (dominantSecond * 10));
        }

    }

    let completedString = "";
    for (let i= 0; i < longTime.length; i++) {
        if (i % 2 === 0 && i !== longTime.length - 1 && i !== 0) {
            completedString += ":";
        }
        completedString += String.fromCodePoint(ssdTimeFont[longTime[i]]); /*only supports one font at this time maybe add more later?*/
    }

    document.getElementById("time").textContent = completedString;
}

function changeTime() {
    const date = new Date();
    if (settings.timeLocationDetermination === 0) {/*if time is just meant to be local newcastle time*/
        hour = date.getUTCHours();
        minute = date.getUTCMinutes();
        second = date.getUTCSeconds();
    } else if (settings.timeLocationDetermination === 1) { //if local user time
        hour = date.getHours();
        minute = date.getMinutes();
        second = date.getSeconds();
    }

    displayTime();
}




changeTime(settings);

setInterval(changeTime, 1000);


