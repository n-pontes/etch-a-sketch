const squareCont = document.querySelector('.sContainer');
const resetButton = document.querySelector('.resetGrid');
const slider = document.querySelector('#gridSize');
const gridValue = document.querySelector('#gridValue');

// Creates a grid based on the size parameter (e.g., 16 for a 16x16 grid)
const makeGrid = (size) => {
    squareCont.innerHTML = ''; // Clears existing grid
    squareCont.style.width = '640px';
    squareCont.style.height = '640px';

    const newSquare = document.createDocumentFragment(); // Create the fragment inside the function
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square'); // Add the 'square' class to each div
        square.style.flex = `0 0 calc(100% / ${size})`; 
        square.style.height = `calc(100% / ${size})`;
        newSquare.appendChild(square);
    }

    // Appends the created squares to the container
    squareCont.appendChild(newSquare);
    addHoverEffect();
}

// To add a random color to the divs on hover
const randomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i ++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color; // Return the generated color
};

const addHoverEffect = () => {
    document.querySelectorAll('.square').forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = randomColor();
        });
    });
};

// Add an event listener to the button and calls the resetButton function

reset.addEventListener('click', () => {
    resetSize();
});

// Redefine the grid size

let resetSize = () => {
    let selectNumber = prompt('Please input the grid size, from 1-100');

    // Validate user input
    if (selectNumber < 1 || selectNumber > 100 || isNaN(selectNumber)) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

    // Clear the existing grid
    squareCont.innerHTML = '';

    // Rebuild the grid with the new size
    makeGrid(selectNumber);

    // Reapply hover effect
    hoverColor();
};

// Call the function to create the squares
makeGrid(33);
// Add hover effect
hoverColor()