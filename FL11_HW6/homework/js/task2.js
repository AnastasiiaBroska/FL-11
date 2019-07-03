let a = parseFloat(prompt('Enter the length of triangle side A', '0'));
let b = parseFloat(prompt('Enter the length of triangle side B', '0'));
let c = parseFloat(prompt('Enter the length of triangle side C', '0'));
let result;
if (a > 0 && b > 0 && c > 0 && (a + b >= c || a + c >= b || b + c >= a)) {
    if (a === b && b === c && a === c) {
        result = 'Equivalent triangle';
    } else if (a === b || a === c || b === c) {
        result = 'Isosceles triangle';
    } else {
        result = 'Normal triangle';
    }
} else {
    result = 'Triangle doesn\'t exist';
}
console.log(result);