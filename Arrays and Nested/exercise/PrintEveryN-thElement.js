function solve(arr, num) {
    let resultArr = [];

    for(let i = 0; i < arr.length; i += num) {
        resultArr.push(arr[i]);
    }

    return resultArr;
}

console.log(solve(['5','20','31','4','20'],2 ));