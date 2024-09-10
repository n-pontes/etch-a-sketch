const squareCont = document.querySelector('.sContainer');
const reset = document.querySelector('.resetGrid');

// Creates a grid based on the size parameter (e.g., 16 for a 16x16 grid)

let makeGrid = (size) => {
    squareCont.innerHTML = ''; // Clears existing grid
    const newSquare = document.createDocumentFragment(); // Create the fragment inside the function

    // Loop to create the grid
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square'); // Add the 'square' class to each div
        newSquare.appendChild(square);
    }

    // Appends the created squares to the container
    squareCont.appendChild(newSquare);

    document.querySelectorAll('.square').forEach(square => {
        square.style.flexBasis = `${640 / size}px`;
        square.style.height = `${640 / size}px`;
    });
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

const hoverColor = () => {
    let items = document.querySelectorAll('.square');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
           const color = randomColor();
           item.style.backgroundColor = color;
        
        });
    });
};


// Call the function to create the squares
makeGrid(33);
// Add hover effect
hoverColor()