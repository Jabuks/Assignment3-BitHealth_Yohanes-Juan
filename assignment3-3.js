function sumArray(arr, int) {
    var seen = {};
    var result = [];
    // console.log(arr, "==> CURRENT VALUE");
    // console.log(seen, "==> BEFORE");
    for ( i = 0; i < arr.length; i++) { // sudah benar
     number = arr[i];

    //  console.log(arr[i], "===> ARRAY INDEX ", i);

     complement = int - number;
        // console.log(seen[complement], "==> SEEN");
        let cekVariableTamp = [complement, number]
        // console.log(cekVariableTamp, "==> BEFORRRR");
        // console.log(seen[complement], "==> KEY OBJ");
        if (seen[complement] === undefined) {  
            // console.log(cekVariableTamp,"==> INDEX FINAL RESULT");
            result.push([complement, number]);
        }
        seen[number] = true;
        // console.log(complement, "==> complement");
        // console.log(number, "=> number");
    }

    // console.log(seen, "==> AFTER");

    return result;
}

console.log(sumArray([2, 1, 4, 3], 5)); //  [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3], 11)); //  [[1, 10], [8, 3]]


const seen={
    
}