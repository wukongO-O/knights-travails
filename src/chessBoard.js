import knight from './img/horse.svg';
import { knightMoves } from './knightMoves';

const gameArea = document.querySelector('.gameArea');

const board = (function(){
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

    //click a cell to place a knight
    const knightIcon = new Image();
    knightIcon.src = knight;
    knightIcon.setAttribute('id', 'horse');
    const placeKnight = (cell) => {
        cell.appendChild(knightIcon);
    };

    const getCellXY = (cell) => {
        return [cell.closest('tr').rowIndex, cell.cellIndex];
    };

    //click a cell to create a destination
    const destination = (cell) => {
        cell.style.backgroundColor = '#f3c324';
        cell.textContent = 'End';
    };

    //radomly create a knight & destination
    const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };
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
    };
    
    //move the knight and show its path
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
    const travail1 = (a, b) => {
        const stops = knightMoves(a, b).path;
        showPath(stops);
    };

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

    let cellClicks = 0;

    return {
        knightIcon,
        placeKnight,
        getCellXY,
        destination,
        randomKnightTravails,
        travail1,
        restart,
        cellClicks
    }
})();

export {gameArea, board};

//svg source: https://www.svgrepo.com/svg/30255/horse