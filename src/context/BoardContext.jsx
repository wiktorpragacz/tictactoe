import { createContext, useContext, useState } from "react";

const BoardProvider = createContext([]);

const BoardContext = ({ children }) => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  const [player, setPlayer] = useState("x");
  const [winner, setWinner] = useState(null);

  return (
    <BoardProvider.Provider
      value={{ board, setBoard, player, setPlayer, winner, setWinner }}
    >
      {children}
    </BoardProvider.Provider>
  );
};

export function useBoard() {
  return useContext(BoardProvider);
}

export default BoardContext;
