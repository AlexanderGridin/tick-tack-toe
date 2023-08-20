import { BoardCell, BoardCellValue } from "../GameCell";
import style from "./GameBoard.module.css";

interface GameBoardProps {
  cells: BoardCellValue[];
  onCellClick: (index: number) => void;
}

export const GameBoard = ({ cells, onCellClick }: GameBoardProps) => {
  const handleCellClick = (index: number) => () => onCellClick(index);

  return (
    <ul className={style.board}>
      {cells.map((cell, index) => {
        return (
          <li key={index}>
            <BoardCell value={cell} onClick={handleCellClick(index)} />
          </li>
        );
      })}
    </ul>
  );
};
