const knightMoves = (a, b) => {
    const chessBoardGrid = buildGrid(8, 8);
    const movesAdjList = buildMovesGraph(chessBoardGrid);

    return shortestPath(movesAdjList, a, b);
};

const shortestPath = (graph, a, b) => {
    const visitedNodes = new Set([a]);
    let queue = [[a, 0]];

    while (queue.length > 0) {
        const [currentNode, moves] = queue.shift();

        if (String(currentNode) === String(b)) return { moves };
       
        for (let neighbor of graph[currentNode]) {
            if (! visitedNodes.has(neighbor)) {
                visitedNodes.add(neighbor);
                queue.push([neighbor, moves + 1]);
            }
        };
    }

    return -1; //if no path is found
}
const buildShortestPath = () => {

}
//Build a grid w each node's value as a  chessboard cell's x-y coordinates
const buildGrid = (row, col) => {
    let grid = [];
    for (let r = 0; r < row; r++) {
        grid.push([]);
        for (let c = 0; c < col; c++) {
            const [a, b] = [r, c];
            grid[r].push([a, b]);
        }
    }
    return grid;
};
//convert a grid into an adjacency list, including neighbors of each node/cell
const buildMovesGraph = (grid) => {
    let graphAdjList = {};

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            let node = grid[r][c];
            if (! (node in graphAdjList)) graphAdjList[node] = [];
            //push node's neighbors up to 8 into the array
            const neighborXYs = [
                [r + 1, c + 2],
                [r + 2, c + 1],
                [r - 1, c + 2],
                [r - 2, c + 1],
                [r + 1, c - 2],
                [r + 2, c - 1],
                [r - 1, c - 2],
                [r - 2, c - 1]
            ];
            neighborXYs.forEach(neighborXY => {
                const [row, col] = neighborXY;
                //check if a neighbor's coordinates are within bounds
                const rowInbounds = 0 <= row && row < grid.length;
                const columnInbounds = 0 <= col && col < grid[0].length;
                if (! rowInbounds || ! columnInbounds) return false;

                graphAdjList[node].push(grid[row][col]);
            });
        };
    };

    return graphAdjList;
};

console.log(knightMoves([0, 0], [5, 5]));