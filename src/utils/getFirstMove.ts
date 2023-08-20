import { BoardCellValue } from "../components/GameCell";

export const getFirstMove = (): BoardCellValue => {
  const randomNumber = Math.trunc(Math.random() * 10);
  return randomNumber < 5 ? "X" : "O";
};
