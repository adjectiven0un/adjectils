function timeToMinutes(seconds){
    var minutes = Math.floor(seconds/60);
    var second = seconds % 60;
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if (second < 10){
        second = "0" + second;
    }
    if (minutes >= 60){
        var hours = Math.floor(minutes / 60);
        minutes -= hours * 60;
        if (minutes < 10){
            minutes = "0" + minutes;
        }
        return(hours + ":" + minutes + ":" + second);
    }
    return (minutes + ":" + second);
}
function fixTime(unit){
    if (unit < 10){
        return "0" + unit;
    }
    return unit;
}
var months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];