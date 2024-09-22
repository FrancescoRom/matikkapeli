'use strict';

// Initialize variables for random numbers and answer counters
let rand_num1 = 0;
let rand_num2 = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

// function for random numbers min max (1-10)
const randomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}
// Function to count answers and update display
function countAnswer(isCorrect) {
    if (isCorrect) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }
    updateDisplay();
}

// Update the display with current scores
function updateDisplay() {
    const correctDisplay = document.getElementById('correctDisplay');
    const incorrectDisplay = document.getElementById('incorrectDisplay');
    
    correctDisplay.textContent = `Correct answers: ${correctAnswers}`;
    incorrectDisplay.textContent = `Incorrect answers: ${incorrectAnswers}`;
}

// Generate random numbers and update the display
const randomizeNumbers = () => {
    rand_num1 = randomIntNumberInRange(1, 10);
    rand_num2 = randomIntNumberInRange(1, 10);
    document.querySelector('#num1').innerHTML = rand_num1;
    document.querySelector('#num2').innerHTML = rand_num2;
}

// Initialize the game when the DOM is fully loaded
addEventListener("DOMContentLoaded", () => {
    randomizeNumbers();
});

// Handle button click for answer submission
document.querySelector('button').addEventListener('click', () => {
    const answer = Number(document.querySelector('input').value);
    const correctAnswer = rand_num1 + rand_num2;
    if (answer === correctAnswer) {
        alert('Correct!');
        countAnswer(true);
    } else {
        alert('Incorrect!');
        countAnswer(false);
    }

    randomizeNumbers();
    document.querySelector('input').value = '';
});