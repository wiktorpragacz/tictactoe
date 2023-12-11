import { useEffect } from "react";
import Square from "./Square";
import { useBoard } from "../context/BoardContext";

const Board = () => {
  const { board, setBoard, player, setPlayer, winner, setWinner } = useBoard();
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    checkWinner();
  }, [player, winner]);

  function handleClick(index, value) {
    const newBoard = board.map((p, i) => {
      if (p === "") {
        if (i === index) {
          return player;
        } else {
          return p;
        }
      } else {
        return p;
      }
    });

    setPlayer((pl) =>
      // Set properly player depending on checked value
      pl === "x" && value === ""
        ? "o"
        : (pl === "x" && value === "x") || value === "0"
        ? "x"
        : pl === "o" && value === ""
        ? "x"
        : (pl === "o" && value === "o") || value === "x"
        ? "o"
        : "x"
    );
    setBoard(newBoard);
  }

  function checkWinner() {
    lines.forEach((line) => {
      if (
        board[line[0]] &&
        board[line[0]] === board[line[1]] &&
        board[line[0]] === board[line[2]]
      ) {
        setWinner(player === "o" ? "x" : "o");
      } else if (
        board.every((x) => x === "x" || (x === "o" && winner === null))
      ) {
        setWinner("tie");
      }
    });
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 ">
      <h2>"{player}" player</h2>
      <div className="grid grid-cols-3 gap-4">
        {board.map((val, i) => (
          <Square onClick={() => handleClick(i, val)} key={i} player={val} />
        ))}
      </div>
    </div>
  );
};

export default Board;
