function solve(arr, num) {
    for(let i = 0; i < num; i++) {
        arr.unshift(arr[arr.length - 1])
        arr.pop()
    }

    console.log(arr.join(' '));
}

solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15);