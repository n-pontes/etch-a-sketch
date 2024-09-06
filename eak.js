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

// Call the function to create the squares
makeSquares();