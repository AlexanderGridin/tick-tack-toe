import { useState } from "react";
import { GameBoard } from "../GameBoard";
import style from "./Game.module.css";
import { BoardCellValue } from "../GameCell";
import { calculateNexMove, calculateWinner, createCells, getFirstMove } from "../../utils";

export const Game = () => {
  const [move, setMove] = useState(getFirstMove());
  const [winner, setWinner] = useState<BoardCellValue>(null);
  const [history, setHistory] = useState<Array<BoardCellValue[]>>([createCells()]);

  const handleCellClick = (index: number) => {
    const cells = history[history.length - 1].slice();
    if (cells[index] || winner) return;

    cells[index] = move;
    setHistory([...history, cells]);

    const calculatedWinner = calculateWinner(cells);
    if (calculatedWinner) {
      setWinner(calculatedWinner);
      setMove(null);

      return;
    }

    setMove(calculateNexMove(move));
  };

  const handleRestartClick = () => {
    setHistory([createCells()]);
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

        <div className={style.boardContainer}>
          <GameBoard cells={history[history.length - 1]} onCellClick={handleCellClick} />

          <div style={{ marginLeft: "25px" }}>
            <h2>History:</h2>

            <ol style={{ margin: 0, padding: 0, listStylePosition: "inside" }}>
              {history.map((_, index) => {
                const isFirst = index === 0;
                const isLast = index === history.length - 1;

                if (isFirst) {
                  return (
                    <li
                      key={index}
                      style={{
                        backgroundColor: "#B48EAD",
                        padding: "5px",
                        color: "#FFF",
                      }}
                    >
                      Start of the game
                    </li>
                  );
                }

                return (
                  <li
                    key={index}
                    style={{
                      backgroundColor: isLast ? "#5E81AC" : isFirst ? "#B48EAD" : "#FFF",
                      padding: "5px",
                      color: isLast || isFirst ? "#FFF" : "#000",
                    }}
                  >
                    {isLast && winner ? `Move #${index} (winner)` : `Move #${index}`}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
