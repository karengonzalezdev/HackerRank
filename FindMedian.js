function findMedian(arr) {
    arr.sort((a, b) => a - b);
    return console.log(arr[Math.floor(arr.length / 2)]);
}

findMedian([4,5,3,2,1])