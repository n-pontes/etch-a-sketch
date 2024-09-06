const squareCont = document.querySelector('.sContainer');
const newSquare = document.createDocumentFragment();

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    newSquare.appendChild(square);
}

squareCont.appendChild(newSquare);
