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
//place knight & destination on chess board
const cells = document.querySelectorAll('.cell');
let cellClicks = 0;
cells.forEach(cell => {
    cell.addEventListener('click', (e) => {
        cellClicks +=1;
        let knightXY;
        let destinationXY;
        if (cellClicks == 1) {
            placeKnight(e);
            knightXY = getCellXY(e);
        } else if (cellClicks == 2) {
            destination(e);
            destinationXY = getCellXY(e);
            //cellClicks = 0;
        } else {
            e.preventDefault();
        };
        return {
            knightXY,
            destinationXY
        };
    });
});
const getCellXY = (e) => {
    return console.log([e.target.closest('tr').rowIndex, e.target.cellIndex]);
};
//click a cell to place a knight
const knightIcon = new Image();
knightIcon.src = knight;
const placeKnight = (e) => {
    e.target.appendChild(knightIcon);
};
//radomly create a knight 
const placeRandomKnight = () => {

};
//click a cell to create a destination
const destination = (e) => {
    e.target.style.backgroundColor = '#f3c324';
};