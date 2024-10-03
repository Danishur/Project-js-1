// Define the Car class
class Car {
  constructor(model, price, year) {
    this.model = model;
    this.price = price;
    this.year = year;
  }
}

// Array to store car objects
let carArray = [];

// Function to add a car to the array and update the DOM
function addCarToList(car) {
  const carList = document.getElementById('carList');

  // Create a list item for the car item
  const carItem = document.createElement('li');
  carItem.classList.add('car-item');

  // Add the car details inside the list item
  carItem.innerHTML = `
    <span class="model">${car.model}</span>
    <span class="year">${car.year}</span>
    <span class="price">USD ${car.price}</span>
  `;

  // Append the car item to the car list
  carList.appendChild(carItem);
}

// Function to clear the form inputs after submission
function clearForm() {
  document.getElementById('model').value = '';
  document.getElementById('price').value = '';
  document.getElementById('year').value = '';
}

// Add event listener for the "Add" button
document.getElementById('addCarButton').addEventListener('click', function() {
  const model = document.getElementById('model').value;
  const price = document.getElementById('price').value;
  const year = document.getElementById('year').value;

  // Validate form inputs
  if (model === '' || price === '' || year === '') {
    alert('Please fill in all fields');
    return;
  }

  // Create a new car object using the Car class
  const newCar = new Car(model, price, year);

  // Add the new car object to the array
  carArray.push(newCar);

  // Update the DOM with the new car
  addCarToList(newCar);

  // Clear the form
  clearForm();
});
