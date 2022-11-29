const knightMoves = (a, b) => {
    const chessBoardGrid = buildGrid(8, 8);
    const movesAdjList = buildMovesGraph(chessBoardGrid);

    return bfs(movesAdjList, String(a), String(b));
};

function bfs(graph, start, end) {
    let queue = [[start, []]],
        seen = new Set;

    while (queue.length) {
        let [curVert, [...path]] = queue.shift();
        path.push(curVert);
        if (curVert === end) return path;

        if (!seen.has(curVert) && graph[curVert]) {
            queue.push(...graph[curVert].map(v => [v, path]));
        }
        seen.add(curVert);
    }

    return -1;
}

// const shortestPath = (graph, nodeA, nodeB) => {
//     const visitedNodes = new Set();
//     const a = String(nodeA);
//     const b = String(nodeB);
//     let queue = [[a, 0, []]];

//     while (queue.length > 0) {
//         let [currentNode, moves, [...path]] = queue.shift();
        
//         if (String(currentNode) === String(b)) return {moves, path};

//         if (! visitedNodes.has(currentNode) && graph
//         [currentNode]) {
//             queue.push(...graph[currentNode].map(n => [n, moves, path]));
//         }
//         visitedNodes.add(currentNode);
//     }
// };

// const shortestPathI = (graph, a, b) => {
//     const visitedNodes = new Set([a]);
//     //const visitedNeighbors = new Set();
//     let previous = new Map();
//     let queue = [[a, 0]];
//     let path = [a];

//     while (queue.length > 0) {
//         var [currentNode, moves] = queue.shift();

//         if (String(currentNode) === String(b)) {
//             return { moves, previous };
//         }  
       
//         for (let neighbor of graph[currentNode]) {
//             // if (hasPath(graph, neighbor, b, visitedNeighbors) == true) {
//             //     path.push(neighbor);
//             // }
            
//             if (! visitedNodes.has(neighbor)) {
//                 previous.set(neighbor, currentNode);
//                 visitedNodes.add(neighbor);
//                 queue.push([neighbor, moves + 1]);
//             }           
//         };
//     }

//     return -1; //if no path is found
// }
// const hasPath = (graph, a, b, visited) => {
//     if (a === b) return true;

//     if (visited.has(a)) return false;
//     visited.add(a);

//     for (let neighborN of graph[a]) {
//         if (hasPath(graph, neighborN, b, visited) === true) return true;
//     };

//     return false;
// };
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

console.log(knightMoves([0, 0], [3, 3]));
console.log(knightMoves([3, 3], [4, 3]));