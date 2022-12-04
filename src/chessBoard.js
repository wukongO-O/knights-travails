import knight from './img/horse.svg';
import { knightMoves } from './knightMoves';

const gameArea = document.querySelector('.gameArea');
// gameArea.classList.add('gameArea');
// document.body.appendChild(gameArea);
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
gameBoard.setAttribute('width', '650px');
gameBoard.setAttribute('height', '650px');
gameBoard.setAttribute('cellspacing', '0');

//place knight & destination on chess board
const cells = document.querySelectorAll('.cell');
let cellClicks = 0;
let knightXY;
let destinationXY = [0, 0];
cells.forEach(cell => {
    cell.addEventListener('click', (e) => {
        cellClicks +=1;
        if (cellClicks == 1) {
            placeKnight(e.target);
            knightXY = getCellXY(e);
        } else if (cellClicks == 2) {
            destination(e.target);
            destinationXY = getCellXY(e);
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
knightIcon.setAttribute('id', 'horse');
const placeKnight = (cell) => {
    cell.appendChild(knightIcon);
};
//click a cell to create a destination
const destination = (cell) => {
    cell.style.backgroundColor = '#f3c324';
    cell.textContent = 'End';
};
//radomly create a knight & destination
const randomKnightTravails = () => {
    const startX = randomNum(0, 8);
    const startY = randomNum(0, 8);
    const dstX = randomNum(0, 8);
    const dstY = randomNum(0, 8);
    const start = document.querySelector('table').rows[startX].cells[startY];
    const destination = document.querySelector('table').rows[dstX].cells[dstY];

    start.appendChild(knightIcon);
    destination.style.backgroundColor = '#f3c324';
    destination.textContent = 'End';

    knightXY = [startX, startY];
    destinationXY = [dstX, dstY];
};
const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

//1 move horse-temp horse stops 2 show path (a-show step #) 3 horse ends at dst - removeChild from a & append to b
const travail1 = (a, b) => {
    const stops = knightMoves(a, b).path;
    showPath(stops);
};

const showPath = (stops) => {
    for (let i = 0; i < stops.length; i++) {
        setTimeout(function(){
            let step = stops[i].split(',').map(Number);
            let stopCell = document.querySelector('table').rows[step[0]].cells[step[1]];
            stopCell.textContent = i;
            stopCell.style.color = '#fd80db';
            stopCell.appendChild(knightIcon);
        }, 500 * i);
    }
};

//removeChild of knight etc; clear the board
const restart = () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent ='';
    })

    const horse = document.getElementById('horse');
    if (horse) horse.remove();

    const whiteCells = document.querySelectorAll('.whiteCell');
    whiteCells.forEach (cell => {
        cell.style.backgroundColor = '#ffffff';
    });
    
    const blackCell = document.querySelectorAll('.blackCell');
    blackCell.forEach(cell => {
        cell.style.backgroundColor = '#000000';
    });

    cellClicks = 0;
};

//buttons
const buttonsDiv = document.createElement('div');
buttonsDiv.classList.add('btnDiv');
gameArea.appendChild(buttonsDiv);

const textIntro = document.createElement('p');
textIntro.textContent = 'Pick the start &  end on the board or click the random-tour button below!';
buttonsDiv.appendChild(textIntro);

const randomBtn = document.createElement('button');
randomBtn.textContent = 'Random Tour';
buttonsDiv.appendChild(randomBtn);
randomBtn.addEventListener('click', randomKnightTravails);

const travailBtn = document.createElement('button');
travailBtn.textContent = 'Go!';
buttonsDiv.appendChild(travailBtn);
travailBtn.addEventListener('click', () => {
    const startCell = document.getElementById('horse').parentNode;
    knightXY = [startCell.parentNode.rowIndex, startCell.cellIndex];
    const dstCell = document.querySelector('td[style*="rgb(243, 195, 36)"]');
    destinationXY = [dstCell.parentNode.rowIndex, dstCell.cellIndex];
    
    travail1(knightXY, destinationXY);
});

const restartBtn = document.createElement('button');
restartBtn.textContent = 'Restart';
buttonsDiv.appendChild(restartBtn);
restartBtn.addEventListener('click',restart);

