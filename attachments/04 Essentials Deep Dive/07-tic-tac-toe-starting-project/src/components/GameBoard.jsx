const initialGameBoard = [
    [null, null, null], 
    [null, null, null], 
    [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        gameBoard[turn["square"]["row"]][turn["square"]["col"]]= turn["player"];
        //another way of doing this is by extracting the values as follows:
        // const { square, player } = turn;
        // const { row, col } = square;
        // gameboard[row][col] = player;
    }

    // const [ gameBoard, setGameBoard ] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = symbol;
    //         return updatedBoard;
    //     });
    //     onSelectSquare();
    // }

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key= {colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                                {playerSymbol}
                            </button>
                        </li>
                    ))}
                </ol>
            </li>
        ))}
    </ol>
}