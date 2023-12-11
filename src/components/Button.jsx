import { useBoard } from "../context/BoardContext";

const Button = () => {
  const { board, setBoard, setPlayer, setWinner } = useBoard();

  function handleRestart() {
    const clearBoard = board.map((i) => (i = ""));
    setBoard(clearBoard);
    setPlayer("x");
    setWinner(null);
  }

  return (
    <button
      onClick={handleRestart}
      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-32"
    >
      Restart
    </button>
  );
};

export default Button;
