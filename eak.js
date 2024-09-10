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

// Adds a mouse over effect 
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

// Resets grid size
resetButton.addEventListener('click', () => {
    const size = parseInt(prompt("Enter new grid size between 16 and 100"));
    if (size >= 16 && size <= 100) {
        makeGrid(size);
        slider.value = size;
        gridValue.textContent = size;
    }
});

// Slider input for grid size
slider.addEventListener('input', (e) => {
    const size = e.target.value;
    gridValue.textContent = size;
    makeGrid(size);
});

// Initialize
makeGrid(16);