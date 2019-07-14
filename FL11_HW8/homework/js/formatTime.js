const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
function formatTime(time) {
    let hours = Math.trunc(time / MINUTES_IN_HOUR);
    let minutes = time - hours * MINUTES_IN_HOUR;
    let days = Math.trunc(hours / HOURS_IN_DAY);
    hours = hours - HOURS_IN_DAY * days;
    return `${days} day(s) ${hours} hour(s) ${minutes} minute(s)`;
}

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));