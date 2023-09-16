// randomBackground.js

// Function to generate a random dark color
function getRandomDarkColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the background color
function changeBackgroundColor() {
    const body = document.body;
    const randomDarkColor = getRandomDarkColor();
    body.style.backgroundColor = randomDarkColor;
}

// Add an event listener to the button
document.addEventListener('DOMContentLoaded', function() {
    const changeBackgroundColorButton = document.getElementById('changeBackgroundColorButton');
    if (changeBackgroundColorButton) {
        changeBackgroundColorButton.addEventListener('click', changeBackgroundColor);
    }
});