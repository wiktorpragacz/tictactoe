import { useBoard } from "../context/BoardContext";

const Square = ({ player, onClick }) => {
  const { winner } = useBoard();

  return (
    <button
      disabled={winner}
      onClick={onClick}
      className={` inline-flex items-center justify-center disabled:opacity-60 hover:bg-gray-200 rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none  border border-gray-300 border-input bg-background  px-4 py-2 w-24 h-24 text-2xl`}
    >
      {player}
    </button>
  );
};

export default Square;
