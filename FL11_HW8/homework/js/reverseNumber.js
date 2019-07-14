const ten = 10;
function reverseNumber(n) {
    let result = '0';
    let isNumberNegative = n < 0;
    if (isNumberNegative) {
        n = -n;
    }
    while (n !== 0) {
        let lastNumber = n % ten;
        n = Math.trunc(n / ten);
        result += lastNumber;
    }
    return isNumberNegative ? -parseInt(result) : parseInt(result);
}

console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(10000));