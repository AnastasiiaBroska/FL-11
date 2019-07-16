//task 0
function getNumbers(str) {
    let numbers = [];
    for (let char of str) {
        if (!isNaN(char)) {
            numbers.push(parseInt(char));
        }
    }
    return numbers;
}

//task 1
function findTypes(...n) {
    let result = {};
    for (let arg of n) {
        let key = '"' + typeof arg + '"';
        let count = result[key];
        if (count === undefined) {
            count = 1;
        } else {
            count++;
        }
        result[key] = count;
    }
    return result;
}

//task 2
function executeForEach(array, func) {
    for (let value of array) {
        func(value);
    }
}

//task 3
function mapArray(array, func) {
    let mappedArray = [];
    executeForEach(array, value => mappedArray.push(func(value)));
    return mappedArray;
}

//task 4
function filterArray(array, func) {
    let filteredArray = [];
    executeForEach(array, value => {
        if (func(value)) {
            filteredArray.push(value);
        }
    });
    return filteredArray;
}

//task 5
function showFormattedDate(date) {
    let monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    return `Date: ${monthNames[month]} ${day} ${year}`;
}

//task 6
function canConvertToDate(date) {
    return !isNaN(Date.parse(date));
}

//task 7
function daysBetween(firstDate, secondDate) {
    return Math.abs(Math.round(millisToDays(new Date(firstDate) - new Date(secondDate))));
}

function millisToDays(millis) {
    const MILLIS_IN_SECOND = 1000;
    const SECONDS_IN_MINUTE = 60;
    const MINUTES_IN_HOUR = 60;
    const HOURS_IN_DAY = 24;
    return millis / MILLIS_IN_SECOND / SECONDS_IN_MINUTE / MINUTES_IN_HOUR / HOURS_IN_DAY;
}

//task 8
let data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'birthday': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'birthday': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'birthday': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'birthday': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];

function getAmountOfAdultPeople(people) {
    let filteredPeople = filterArray(people, person => isAdult(person['birthday']));
    return filteredPeople.length;
}

function isAdult(birthDate) {
    const DAYS_IN_YEAR = 365;
    const ADULT_AGE = 18;
    let now = new Date();
    return daysBetween(now, birthDate) >= DAYS_IN_YEAR * ADULT_AGE;
}

//task 9
function keys(object) {
    let keys = [];
    for (let objectKey in object) {
        if (object.hasOwnProperty(objectKey)) {
            keys.push(objectKey);
        }
    }
    return keys;
}

//task 10
function values(object) {
    let values = [];
    for (let objectKey in object) {
        if (object.hasOwnProperty(objectKey)) {
            values.push(object[objectKey]);
        }
    }
    return values;
}