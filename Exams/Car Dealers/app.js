window.addEventListener("load", solve);

function solve() {
    document.getElementById('publish').addEventListener('click', addCar);
    let make = document.getElementById('make');
    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let fuel = document.getElementById('fuel');
    let originalCost = document.getElementById('original-cost');
    let sellingPrice = document.getElementById('selling-price');
    let tableBodyEl = document.getElementById('table-body');

    function addCar() {
      let makeValue = make.value;
      let modelValue = model.value;
      let yearValue = year.value;
      let fuelValue = fuel.value;
      let originalCostValue = originalCost.value;
      let sellingPriceValue = sellingPrice.value;

      if(!makeValue || !modelValue || !yearValue || !fuelValue || !originalCostValue || !sellingPriceValue) {
        return;
      }

      createDOMElements(makeValue, modelValue, yearValue, fuelValue, originalCostValue, sellingPriceValue);
      clearFormField();
    }

    function clearFormField() {
      make.value = '';
      model.value = '';
      year.value = '';
      fuel.value = '';
      originalCost.value = '';
      sellingPrice.value = '';
    }

    function createDOMElements(makeValue, modelValue, yearValue, fuelValue, originalCostValue, sellingPriceValue) {
      let li = document.createElement('li');
      let car = createCar(makeValue, modelValue, yearValue, fuelValue, originalCostValue, sellingPriceValue);

      let td = document.createElement('td');

      let editBTN = document.createElement('button');
      editBTN.classList.add('action-btn');
      editBTN.classList.add('edit');
      editBTN.textContent = 'Edit';
      editBTN.addEventListener('click', editCar);

      let sellBTN = document.createElement('button');
      sellBTN.classList.add('action-btn');
      sellBTN.classList.add('sell');
      sellBTN.textContent = 'Sell';

      td.appendChild(editBTN);
      td.appendChild(sellBTN);

      li.appendChild(car);
      li.appendChild(td);

      tableBodyEl.appendChild(td);
    }

    function createCar(makeValue, modelValue, yearValue, fuelValue, originalCostValue, sellingPriceValue) {
      let tr = document.createElement('tr');
      tr.classList.add('row');

      let tdMake = document.createElement('td');
      tdMake.textContent = `${makeValue}`;

      let tdModel = document.createElement('td');
      tdModel.textContent = `${modelValue}`;

      let tdYear = document.createElement('td');
      tdYear.textContent = `${yearValue}`;

      let tdFuel = document.createElement('td');
      tdFuel.textContent = `${fuelValue}`;

      let tdOriginalCostValue = document.createElement('td');
      tdOriginalCostValue.textContent = `${originalCostValue}`;

      let tdSellingPriceValue = document.createElement('td');
      tdSellingPriceValue.textContent = `${sellingPriceValue}`;

      tr.appendChild(tdMake);
      tr.appendChild(tdModel);
      tr.appendChild(tdYear);
      tr.appendChild(tdFuel);
      tr.appendChild(tdOriginalCostValue);
      tr.appendChild(tdSellingPriceValue);

      return tr;
    }

    function editCar(e) {
      let currentCar = e.target.parentElement;
      
    }
}
