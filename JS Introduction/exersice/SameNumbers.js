function solve(number) {
    let isSame = true;
    let numAsString = number.toString();
    let firstNumber = numAsString[0];
    let sum = 0;

    for(let i = 0; i < numAsString.length; i++) {
        if(numAsString[i] !== firstNumber)  {
            isSame = false;
        }

        sum += Number(numAsString[i]);
    }

    console.log(isSame);
    console.log(sum);
}

solve(2222222);
solve(1234);