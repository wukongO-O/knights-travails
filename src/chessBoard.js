import knight from './img/horse.svg';

const gameArea = document.createElement('div');
document.body.appendChild(gameArea);
//create an 8 x 8, black-n-white chess board via table element
const gameBoard = document.createElement('table');
for (let i = 0; i < 8; i++) {
    let row = document.createElement('tr');
    for (let j = 0; j < 8; j++) {
        const cell = document.createElement('td');
        row.appendChild(cell);
        if ((i + j) % 2 == 0) {
            cell.setAttribute('class', 'cell whiteCell');
        } else {
            cell.setAttribute('class', 'cell blackCell');
        }
    };
    gameBoard.appendChild(row);
};
gameArea.appendChild(gameBoard);
gameBoard.setAttribute('width', '400px');
gameBoard.setAttribute('height', '400px');
gameBoard.setAttribute('cellspacing', '0');
//create a knght by clicking
const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
    cell.addEventListener('click', (e) => {
        getCellXY(e);
        placeKnight(e);
    })

});
const getCellXY = (e) => {
    return console.log([e.target.closest('tr').rowIndex, e.target.cellIndex]);
};
//knight icon does not display right
const knightIcon = new Image();
knightIcon.src = knight;
const placeKnight = (e) => {
    e.target.appendChild(knightIcon);
};
//radomly create a knight 
const placeRandomKnight = () => {

};