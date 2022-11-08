function solve(str1, str2, str3) {

    let sum;
    let average;

    let firstArgumentLength = str1.length;
    let secondArgumentLength = str2.length;
    let thirdArgumentLength = str3.length;

    sum = firstArgumentLength + secondArgumentLength + thirdArgumentLength;
    average = sum / 3;

    return sum + '\n' + Math.trunc(average);
}

console.log(solve('chocolate', 'ice cream', 'cake'));