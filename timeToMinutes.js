function timeToMinutes(seconds){
    var minutes = Math.floor(seconds/60);
    var second = seconds % 60;
    minutes = fixTime(minutes);
    second = fixTime(second);
    if (minutes >= 60){
        var hours = Math.floor(minutes / 60);
        hours = fixTime(hours);
        minutes -= hours * 60;
        minutes = fixTime(minutes);
        if (hours >= 24){
            var days = Math.floor(hours / 24);
            hours -= days * 24;
            hours = fixTime(hours);
            return (" " + days + ":" + hours + ":" + minutes + ":" + fixTime(Math.floor(second)));
        }
        return(" " + hours + ":" + minutes + ":" + fixTime(Math.floor(second)));
    }
    return (" " + minutes + ":" + fixTime(Math.floor(second)));
}
function fixTime(unit){
    if (unit < 10){
        return "0" + unit;
    }
    return unit;
}
var months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
function convertTimestamp(timestamp){
    //Timestamp should be in milliseconds.
    var stamp = new Date((timestamp + 1) * 1000);
    var ampm = "am";
        if (Math.floor(stamp.getHours() / 12) >= 1){
          ampm = "pm";
    }
    if (stamp.getHours() % 12 == 0){
        return "12:" + fixTime(stamp.getMinutes()) + ampm + " " + months[stamp.getMonth()] + " " + stamp.getDate();
    }
    return fixTime(stamp.getHours() % 12) + ":" + fixTime(stamp.getMinutes()) + ampm + " " + months[stamp.getMonth()] + " " + stamp.getDate();
    
}

function betterTimestamp(seconds) {
    var minutes = Math.floor(seconds/60);
    var second = seconds % 60;
    minutes = fixTime(minutes);
    second = fixTime(second);
    if (seconds >= 60) {
        if (minutes >= 60){
            var hours = Math.floor(minutes / 60);
            hours = fixTime(hours);
            minutes -= hours * 60;
            minutes = fixTime(minutes);
            if (hours >= 24){
                var days = Math.floor(hours / 24);
                hours -= days * 24;
                hours = fixTime(hours);
                return (" " + days + "d " + hours + "h " + minutes + "m " + fixTime(Math.floor(second)) + "s");
            }
            return(" " + hours + "h " + minutes + "m " + fixTime(Math.floor(second)) + "s");
        }
        return (" " + minutes + "m " + fixTime(Math.floor(second)) + "s");
    }
    return (fixTime(Math.floor(second)) + "s");
}