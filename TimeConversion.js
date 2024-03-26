'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {

    const arr = s.slice(0,8).split(':');
    arr[0] = (s.indexOf('PM') > -1) ?
             (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
             (arr[0] == 12 ? '00' : arr[0]);
    return console.log(arr.join(':'));
}

//example input
timeConversion('12:05:45AM');

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
