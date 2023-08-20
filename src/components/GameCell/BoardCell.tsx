import style from "./BoardCell.module.css";

export type BoardCellValue = "X" | "O" | null;

interface BoardCellProps {
  value: BoardCellValue;
  onClick: () => void;
}

export const BoardCell = ({ value, onClick }: BoardCellProps) => {
  return (
    <button type="button" className={style.button} onClick={onClick}>
      {value}
    </button>
  );
};
