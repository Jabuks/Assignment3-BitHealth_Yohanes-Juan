function arrSum(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    let start = 0;
    let end = 0;
    let s = 0;

    for (let i = 1; i < arr.length; i++) {
        if (maxEndingHere + arr[i] < arr[i]) {
            maxEndingHere = arr[i];
            s = i;
        } else {
            maxEndingHere += arr[i];
        }
        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
            start = s;
            end = i;
        }
    }

    let subarray = arr.slice(start, end + 1);
    return [subarray, maxSoFar];
}

// Example usage:
console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3])); // Expected Output: [[4, -1, -2, 1, 5], 7]