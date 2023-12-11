import Board from "./components/Board";
import Button from "./components/Button";
import Scoreboard from "./components/Scoreboard";
import JSConfetti from "js-confetti";
import { useBoard } from "./context/BoardContext";

const App = () => {
  const { winner } = useBoard();

  const jsConfetti = new JSConfetti();

  if (winner !== null) {
    jsConfetti.addConfetti({});
  }

  return (
    <div className="flex flex-col items-center place-content-center justify-center h-screen bg-gray-100 ">
      <h1 className="text-3xl font-semibold mb-8">Tic Tac Toe</h1>

      <Board />
      {winner !== null && <Scoreboard winner={winner} />}

      <Button />
    </div>
  );
};

export default App;
