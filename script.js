let yesButton = document.getElementById('yesButton');
let noButton = document.getElementById('noButton');
let dateContainer = document.getElementById('dateContainer');
let question = document.getElementById('question');
let dateInput = document.getElementById('dateInput');
let destinationContainer = document.getElementById('destinationContainer');
let foodContainer = document.getElementById('foodContainer');
let drinksContainer = document.getElementById('drinksContainer');

let selectedDate = '';
let selectedDestination = '';
let selectedFood = '';
let selectedDrink = '';

noButton.addEventListener('click', function() {
    const x = Math.random() * (window.innerWidth - noButton.clientWidth);
    const y = Math.random() * (window.innerHeight - noButton.clientHeight);
    
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

yesButton.addEventListener('click', function() {
    question.style.display = 'none';
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
    dateContainer.style.display = 'block';
});

document.getElementById('submitDateButton').addEventListener('click', function() {
    selectedDate = dateInput.value;
    if (selectedDate) {
        dateContainer.style.display = 'none';
        destinationContainer.style.display = 'block';
    }
});

document.querySelectorAll('.destination').forEach(image => {
    image.addEventListener('click', function() {
        selectedDestination = this.getAttribute('data-name');
        document.querySelectorAll('.destination').forEach(d => d.classList.remove('selected'));
        this.classList.add('selected');
    });
});

document.getElementById('submitPlaceButton').addEventListener('click', function() {
    if (selectedDestination) {
        destinationContainer.style.display = 'none';
        foodContainer.style.display = 'block';
    }
});

// Handle food selection
document.querySelectorAll('.food').forEach(image => {
    image.addEventListener('click', function() {
        selectedFood = this.getAttribute('data-name');
        document.querySelectorAll('.food').forEach(f => f.classList.remove('selected'));
        this.classList.add('selected');
    });
});

document.getElementById('submitFoodButton').addEventListener('click', function() {
    const foodChoice = document.querySelector('.food.selected');
    if (foodChoice) {
        selectedFood = foodChoice.getAttribute('data-name');
        foodContainer.style.display = 'none';
        drinksContainer.style.display = 'block';
    } else {
        alert('Please select a food item before proceeding.');
    }
});

document.querySelectorAll('.drink').forEach(image => {
    image.addEventListener('click', function() {
        selectedDrink = this.getAttribute('data-name');
        document.querySelectorAll('.drink').forEach(d => d.classList.remove('selected'));
        this.classList.add('selected');
    });
});

document.getElementById('submitDrinkButton').addEventListener('click', function() {
    const drinkChoice = document.querySelector('.drink.selected');
    if (drinkChoice) {
        selectedDrink = drinkChoice.getAttribute('data-name');
        drinksContainer.style.display = 'none';
        document.getElementById('summaryContainer').style.display = 'block';

        const summaryText = `
        You have chosen:
        <br>Date: ${selectedDate}
        <br>Destination: ${selectedDestination}
        <br>Food: ${selectedFood}
        <br>Drink: ${selectedDrink}
        <br><br>Please take a screenshot of this and send it to me!
        `;

        document.getElementById('summaryText').innerHTML = summaryText;
    } else {
        alert('Please select a drink before proceeding.');
    }
});
