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