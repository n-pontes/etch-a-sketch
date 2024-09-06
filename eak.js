const squareCont = document.querySelector('.sContainer');

// Creates 256 divs in a 16x16 grid

let makeSquares = () => {
    const newSquare = document.createDocumentFragment(); // Create the fragment inside the function
    for (let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('square'); // Add the 'square' class to each div
        newSquare.appendChild(square);
    }

    squareCont.appendChild(newSquare);
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
           addTrail(item, color);
        });
    });
};

// Add a simple trail effect
const addTrail = (square, color) => {
    // Add the 'trail' class to the square itself
    square.classList.add('trail');

    // Optionally, add a small trail effect by adding a class to adjacent squares
    const index = Array.from(squareCont.children).indexOf(square);
    const row = Math.floor(index / 16);
    const col = index % 16;

    if (row > 0) squareCont.children[(row - 1) * 16 + col].classList.add('trail');
    if (row < 15) squareCont.children[(row + 1) * 16 + col].classList.add('trail');
    if (col > 0) squareCont.children[row * 16 + (col - 1)].classList.add('trail');
    if (col < 15) squareCont.children[row * 16 + (col + 1)].classList.add('trail');
};


// Call the function to create the squares
makeSquares();
// Add hover effect
hoverColor()