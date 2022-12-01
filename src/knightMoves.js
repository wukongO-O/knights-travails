const knightMoves = (a, b) => {
    const chessBoardGrid = buildGrid(8, 8);
    const movesAdjList = buildMovesGraph(chessBoardGrid);

    return shortestPath(movesAdjList, String(a), String(b));
};
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
            if (! (node in graphAdjList)) graphAdjList[String(node)] = [];
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

                graphAdjList[String(node)].push(String(grid[row][col]));
            });
        };
    };

    return graphAdjList;
};
//bfs to find min moves from point a to b & track the path
const shortestPath = (graph, a, b) => {
    const visitedNodes = new Set();
    let queue = [[a, 0, []]];

    while (queue.length > 0) {
        let [currentNode, moves, [...path]] = queue.shift();
        path.push(currentNode);
        
        if (String(currentNode) === String(b)) return {moves, path};

        if (! visitedNodes.has(currentNode)) {
            const neighbors = graph[currentNode].map(neighbor => [neighbor, moves + 1, path]);
            queue.push(...neighbors);
            // queue.push(...graph[currentNode].map(neighbor => [neighbor, moves+1, path])); //condense above 2 lines to 1
            visitedNodes.add(currentNode);
        }
    }
};
console.log(knightMoves([0, 0], [3, 3])); //{ moves: 2, path: [ '0,0', '1,2', '3,3' ] }
console.log(knightMoves([3, 3], [4, 3])); //{ moves: 3, path: [ '3,3', '4,5', '6,4', '4,3' ] }

export { knightMoves };