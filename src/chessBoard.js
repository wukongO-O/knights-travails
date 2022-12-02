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

    // return {
    //     knightXY,
    //     destinationXY
    // } 
};
const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

//1 move horse-temp horse stops 2 show path (a-show step #) 3 horse ends at dst - removeChild from a & append to b
const travail = (a, b) => {
    const pointA = document.querySelector('table').rows[a[0]].cells[a[1]];
    const pointB = document.querySelector('table').rows[b[0]].cells[b[1]];
    const stops = knightMoves(a, b).path;

    horseMoves(stops), 1000;
    showPath(stops), 6000;
    horseArrives(pointA, pointB);
};
//need to fix this 
const horseMoves = (stops) => {
    const horse = document.getElementById('horse');
    for (let i = 0; i < stops.length - 1; i++) {
        setTimeout (function(){
            let step = stops[i].split(',').map(Number);
            let nextStep = stops[i + 1].split(',').map(Number);
            
            const moveX = (nextStep[0] - step[0]) * 40;
            const moveY = (nextStep[1] - step[1]) * 40;
            //horse.style.transition = 'transform 1s';
            horse.style.translate = `${moveX}px ${moveY}px`;
        }, 500 * i);  
    };
};
const showPath = (stops) => {
    for (let i = 0; i < stops.length; i++) {
        setTimeout(function(){
            let step = stops[i].split(',').map(Number);
            let stopCell = document.querySelector('table').rows[step[0]].cells[step[1]];
            stopCell.textContent = i;
            stopCell.style.color = 'red';
        }, 500 * i);
    }
};
const horseArrives = (cellA, cellB) => {
    setTimeout(function(){
        cellA.removeChild(cellA.firstChild);
        cellA.textContent = 'Start';
        cellB.appendChild(knightIcon);
        cellB.lastChild.removeAttribute('style', 'translate');
    }, 4000);
   
}
//removeChild of knight etc; clear the board
const restart = () => {
 
};

//buttons
const randomBtn = document.createElement('button');
randomBtn.textContent = 'Random Tour';
gameArea.appendChild(randomBtn);
randomBtn.addEventListener('click', randomKnightTravails);




const travailBtn = document.createElement('button');
travailBtn.textContent = 'Go!';
gameArea.appendChild(travailBtn);

travailBtn.addEventListener('click', () => {
    const startCell = document.getElementById('horse').parentNode;
    knightXY = [startCell.parentNode.rowIndex, startCell.cellIndex];
    const dstCell = document.querySelector('td[style*="rgb(243, 195, 36)"]');
    destinationXY = [dstCell.parentNode.rowIndex, dstCell.cellIndex];
    console.log(knightXY);
    console.log(destinationXY);
    travail(knightXY, destinationXY)
});

const restartBtn = document.createElement('button');
restartBtn.textContent = 'Restart';
gameArea.appendChild(restartBtn);