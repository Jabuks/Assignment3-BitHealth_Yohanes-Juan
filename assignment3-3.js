function sumArray(arr, int) {
    var seen = {};
    var result = [];

    for ( i = 0; i < arr.length; i++) {
     number = arr[i];
     complement = int - number;
        if (seen[complement] !== undefined) {
            result.push([complement, number]);
        }
        seen[number] = true;
    }

    return result;
}

// test
console.log(sumArray([2, 1, 4, 3], 5)); //  [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3], 11)); //  [[1, 10], [8, 3]]
