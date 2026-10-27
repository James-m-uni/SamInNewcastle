/*VARIABLES NEEDED IN WHOLE SCOPE*/
let hour = 0;
let minute = 0;
let second = 0;

let setting = 0;

let ssdTimeFont = [0x1FBF0, 0x1FBF1, 0x1FBF2, 0x1FBF3, 0x1FBF4, 0x1FBF5, 0x1FBF6, 0x1FBF7, 0x1FBF8, 0x1FBF9]; /*hexadecimal font codes for the seven segment display*/


function getTime(setting) { //0 = time in newcastle, 1 = local user time
    const date = new Date();

    if (setting === 0) {//if newcastle time (mabye add check for british summer time)?
        hour = date.getUTCHours();
        minute = date.getUTCMinutes();
    } else if (setting === 1) {//if local user time
        hour = date.getHours();
        minute = date.getMinutes();
        console.log("Getting local user time of", hour, ":", minute);
    }
}

function formatter(number) {
    if (number < 10) {
        return "0" + number;
    }
    return number;
}

function changeTime(setting) {
    const timeTitle = document.getElementById("time");

    getTime(setting);

    /*Format time to correct number of digits*/

    //add check for if setting time is enabled
    if (true) {
        timeTitle.textContent = formatter(hour) + ":" + formatter(minute);
    }
}

changeTime(setting);