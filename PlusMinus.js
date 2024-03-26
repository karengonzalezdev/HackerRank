'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    
    let positive = arr.filter(number => (number > 0 && number <= 100)).length / arr.length;
    let negative = arr.filter(number => (number < 0 && number >= -100)).length / arr.length;;
    let zero = arr.filter(number => number == 0).length / arr.length;;
    console.log(positive.toFixed(6) + '\n' + negative.toFixed(6) + '\n' + zero.toFixed(6))

}

//example input 
plusMinus([-4,3,-9,0,4,1]);

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}