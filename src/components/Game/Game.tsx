import { useState } from "react";
import { GameBoard } from "../GameBoard";
import style from "./Game.module.css";
import { BoardCellValue } from "../GameCell";
import { calculateNexMove, calculateWinner, createCells, getFirstMove } from "../../utils";

export const Game = () => {
  const [cells, setCells] = useState<BoardCellValue[]>(createCells());
  const [move, setMove] = useState(getFirstMove());
  const [winner, setWinner] = useState<BoardCellValue>(null);

  const handleCellClick = (index: number) => {
    if (cells[index] || winner) return;

    const cellsCopy = cells.slice();
    cellsCopy[index] = move;

    setCells(cellsCopy);

    const calculatedWinner = calculateWinner(cellsCopy);
    if (!calculatedWinner) {
      setMove(calculateNexMove(move));
      return;
    }

    setWinner(calculatedWinner);
    setMove(null);
  };

  const handleRestartClick = () => {
    setCells(createCells());
    setMove(getFirstMove());
    setWinner(null);
  };

  return (
    <div className={style.container}>
      <div>
        {move && <h2>Current move: {move}</h2>}
        {winner && (
          <>
            <h2>WINNER: {winner}</h2>
            <button onClick={handleRestartClick}>Restart</button>
          </>
        )}
        <GameBoard cells={cells} onCellClick={handleCellClick} />
      </div>
    </div>
  );
};
