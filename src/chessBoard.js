import knight from './img/horse.svg';
import { knightMoves } from './knightMoves';

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
let knightXY;
let destinationXY;
cells.forEach(cell => {
    cell.addEventListener('click', (e) => {
        cellClicks +=1;
        if (cellClicks == 1) {
            placeKnight(e.target);
            knightXY = getCellXY(e);
        } else if (cellClicks == 2) {
            destination(e.target);
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
knightIcon.setAttribute('id', 'horse');
const placeKnight = (cell) => {
    cell.appendChild(knightIcon);
};
//click a cell to create a destination
const destination = (cell) => {
    cell.style.backgroundColor = '#f3c324';
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

    knightXY = [startX, startY];
    destinationXY = [dstX, dstY];

    return {
        knightXY,
        destinationXY
    } 
};
const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

//1 move horse-temp horse stops 2 show path (a-show step #) 3 horse ends at dst - removeChild from a & append to b
const travail = (a, b) => {
    const pointA = document.querySelector('table').rows[a[0]].cells[a[1]];
    const pointB = document.querySelector('table').rows[b[0]].cells[b[1]];
    const stops = knightMoves(a, b).path;

    horseMoves(stops);
    showPath(stops);
    horseArrives(pointA, pointB);
};
const horseMoves = (stops) => {
    const horse = document.getElementById('horse');
    for (let i = 0; i < stops.length - 1; i++) {
        let stop = stops[i];
        let nextStop = stops[i + 1];
        moveX = (nextStop[0] - stop[0]) * 40;
        moveY = (nextStop[1] - stop[1]) * 40;
        horse.style.translate = `${moveX}px ${moveY}px`;
    };
};
const showPath = (stops) => {
    for (let i = 0; i < stops.length; i++) {
        let stop = stops[i]
        const stopCell = document.querySelector('table').rows[stop[0]].cells[stop[1]];
        stopCell.textContent = i;
    }
};
const horseArrives = (cellA, cellB) => {
    cellA.removeChild(knightIcon);
    cellB.appendChild(knightIcon);
}

const restart = () => {
 
};

//buttons
const randomBtn = document.createElement('button');
randomBtn.textContent = 'Random Tour';
gameArea.appendChild(randomBtn);
randomBtn.addEventListener('click', randomKnightTravails);
