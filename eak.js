const squareCont = document.querySelector('.sContainer');
const newSquare = document.createDocumentFragment();

// Creates 256 divs in a 16x16 grid

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square'); // Add the 'square' class to each div
    newSquare.appendChild(square);
}

squareCont.appendChild(newSquare);
