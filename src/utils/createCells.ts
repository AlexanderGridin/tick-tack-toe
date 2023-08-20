import { BoardCellValue } from "../components/GameCell";

export const createCells = (): BoardCellValue[] => {
  return Array(9).fill(null);
};
