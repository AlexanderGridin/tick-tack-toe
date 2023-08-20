import { BoardCellValue } from "../components/GameCell";

export const calculateNexMove = (currentMove: BoardCellValue): BoardCellValue => {
  return currentMove === "X" ? "O" : "X";
};
