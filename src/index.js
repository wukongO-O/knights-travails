import './style.css';
import './knightMoves';
import {gameArea, board} from './chessBoard';

//place knight & destination on chess board
const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
    cell.addEventListener('click', (e) => {
        board.cellClicks +=1;
        if (board.cellClicks == 1) {
            board.placeKnight(e.target);
        } else if (board.cellClicks == 2) {
            board.destination(e.target);
        } else {
            e.preventDefault();
        };
    });
});

//buttons & event listneners
const buttonsDiv = document.createElement('div');
buttonsDiv.classList.add('btnDiv');
gameArea.appendChild(buttonsDiv);

const textIntro = document.createElement('p');
textIntro.textContent = 'Pick the start &  end on the board or click the random-tour button below!';
buttonsDiv.appendChild(textIntro);

const randomBtn = document.createElement('button');
randomBtn.textContent = 'Random Tour';
buttonsDiv.appendChild(randomBtn);
randomBtn.addEventListener('click', board.randomKnightTravails);

const travailBtn = document.createElement('button');
travailBtn.textContent = 'Go!';
buttonsDiv.appendChild(travailBtn);
travailBtn.addEventListener('click', () => {
    const startCell = document.getElementById('horse').parentNode;
    const knightXY1 = [startCell.parentNode.rowIndex, startCell.cellIndex];
    const dstCell = document.querySelector('td[style*="rgb(243, 195, 36)"]');
    const destinationXY1 = [dstCell.parentNode.rowIndex, dstCell.cellIndex];
    
    board.travail1(knightXY1, destinationXY1);
});

const restartBtn = document.createElement('button');
restartBtn.textContent = 'Restart';
buttonsDiv.appendChild(restartBtn);
restartBtn.addEventListener('click',board.restart);