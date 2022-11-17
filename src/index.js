import './style.css';

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
