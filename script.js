/*VARIABLES NEEDED IN WHOLE SCOPE*/
let hour = 0;
let minute = 0;

function getTime(setting){ //0 = time in newcastle, 1 = local user time
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