function solve(type, weght, price) {
    let weightInKg = weght / 1000;

    let totalMoney = weightInKg * price;
    
    console.log(`I need \$${totalMoney.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${type}.`);
}

solve('orange', 2500, 1.80);