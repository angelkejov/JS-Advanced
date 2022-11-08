class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if(!model || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        } 

        this.availableCars.push(model, horsepower, price, mileage);
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        const findModel = this.availableCars.find(c => c.model === model);
        console.log(findModel);

        if(!findModel) {
            throw new Error(`${model} was not found!`)
        } else {
            let diff = findModel.mileage - desiredMileage;
            if(diff <= 40000) {
                findModel.price = (findModel.price / 100) * 5
            } else if(diff > 40000) {
                findModel.price = (findModel.price / 100) * 10
            }
            this.availableCars.pop();
            this.soldCars.push(model, findModel.horsepower, findModel.price);
        }

        this.totalIncome = price;
        
        return `${model} was sold for ${price}$`;
    } 
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.sellCar('Toyota Corolla', 230000));
console.log(dealership.sellCar('Mercedes C63', 110000));
