const Scoreboard = ({ winner }) => {
  return (
    <div className="my-8">
      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 text-2xl">
        {winner === "tie" ? "Tie!" : `Player ${winner} wins!`}
      </div>
    </div>
  );
};

export default Scoreboard;
