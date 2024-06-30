// function filterOutFalsy(val1, val2){
//     return !val1 ? val1: val2;
// }

// console.log(filterOutFalsy(0, 500))
// console.log(filterOutFalsy(false, 100))
// console.log(filterOutFalsy(true,"Dog"))

function arrLength(arr) {
    return arr.length
}

console.log(arrLength(''))
console.log(arrLength([1, 2, 3]))
console.log(arrLength([5, 0, -4, 1]))

function lastElem(arr) {
    return arr[arr.length-1];
}

console.log(lastElem([3,2,0,6,2]))
console.log(lastElem(['dog', 'cat', 'ball']))
console.log(lastElem([null, 5, false]))

function arrSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; ++i) {
        // This is how you loop through every element in an array
        sum = sum + arr[i]
    }
    return sum;
}

console.log(arrSum([2,2,2]))
console.log(arrSum([100, 200, 500]))
console.log(arrSum([0, -5, -10]))

function progressiveSum(num){
    let sum = 0
    for (let i = 1; i <= num; ++i) {
        sum = sum + i;
    }
    return sum;
}

console.log(progressiveSum(3))
console.log(progressiveSum(4))
console.log(progressiveSum(600))

function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60)
    let timerSeconds = seconds % 60;
    timerSeconds = timerSeconds < 10 ? "0" + timerSeconds : timerSeconds; 

    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes;
    }

    return timerMinutes + ':' + timerSeconds;
}

console.log(calcTime(66))
console.log(calcTime(50))
console.log(calcTime(300))

// function getMax(arr) {
//     let max = arr[0]
//     //gets first number
//     for (let i = 1; i < arr.length; ++i) {
//         //          this is how we keep looping; this is incremeting i each time
//         if (arr[i] > max) {
//             //if arr[i] is a bigger number than current max
//             max=arr[i]
//             // then let new Max be the newest max
//         }
//     }
//     return max;

// }


function getMax(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
        return max;
}

console.log(getMax([5, 100, 0]))
console.log(getMax([12, 10, -20]))
console.log(getMax([-300, -100, -200]))

// *incremeting for loop*
// function reverseString(str) {
//     let reversedString = '';
//     for (let i = 0; i < str.length; ++i) {
//         //This is how you loop through every character in a string 
//         reversedString = str[i] + reversedString;
//     }
//     return reversedString
// }

// console.log(reverseString('abc'))
// console.log(reverseString('Jacky'))
// console.log(reverseString('This is cool'))


//decrementing for loop
function reverseString(str) {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; --i) {
        reversedString = reversedString + str[i]
    }
    return reversedString;
}

console.log(reverseString('abc'))
console.log(reverseString('Jacky'))
console.log(reverseString('This is cool'))

//array reverse property (only works on an arry)
function reverseString(str) {
    return str.split('').reverse().join('')
    //.split makes string into an arry; .reverse makes array reverse; .join makes it add back to string
}

console.log(reverseString('abc'))
console.log(reverseString('Jacky'))
console.log(reverseString('This is cool'))

//for loop
function convertToZeros(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; ++i) {
        newArr[i] = 0
    }
    return newArr;
}

console.log(convertToZeros([5,100,0]))
console.log(convertToZeros([12]))
console.log(convertToZeros([51,2,3,4,5]))

//arry.fill 'fill' method
function convertToZeros(arr) {
    return new Array(arr.length).fill(0);
}

console.log(convertToZeros([5,100,0]))
console.log(convertToZeros([12]))
console.log(convertToZeros([51,2,3,4,5]))

// arry.map 'map' method
function convertToZeros(arr) {
    return arr.map(arr => 0 );
}

console.log(convertToZeros([5,100,0]))
console.log(convertToZeros([12]))
console.log(convertToZeros([51,2,3,4,5]))

//for loop
function removeApples(arr) {
    let noApples = []
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== 'Apple')    {
            noApples.push(arr[i])
        }
    }
    return noApples;
}

console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))
console.log(removeApples(['Tomato', 'Orange', 'Banana']))
console.log(removeApples(['Banana', 'Orange', 'Apple']))

//array filter

function removeApples(arr) {
    return arr.filter(elem => elem !== 'Apple')
}

console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))
console.log(removeApples(['Tomato', 'Oranges', 'Banana']))
console.log(removeApples(['Banana', 'Orange', 'Apple']))


//for loop
// function filterOutFalsy(arr) {
//     let truthArr = [];
//     for (let i= 0; i < arr.length; ++i)
//         if (!!arr[i] === true) {
//             truthArr.push(arr[i])
//         }
//     return truthArr;
// }

// console.log(filterOutFalsy(["",[], 0, undefined, "0"]))
// console.log(filterOutFalsy(['Tomato', 'Orange', 'Banana', false]))
// console.log(filterOutFalsy(['Banana', 'Orange', 'Apple']))

//array filter

function filterOutFalsy(arr) {
    return arr.filter(elem => !!elem === true)
}

console.log(filterOutFalsy(["",[], 0, undefined, "0"]))
console.log(filterOutFalsy(['Tomato', 'Orange', 'Banana', false]))
console.log(filterOutFalsy(['Banana', 'Orange', 'Apple']))


function convertToBoolean(arr) {
    return arr.map(elem => !!elem);
}

console.log(convertToBoolean([500, 0, "Jacky", "", []]))
