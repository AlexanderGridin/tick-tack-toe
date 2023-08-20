import { BoardCellValue } from "../components/GameCell";

export const calculateWinner = (cells: BoardCellValue[]) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let winner: BoardCellValue = null;

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    const isWin = cells[a] === cells[b] && cells[a] === cells[c];

    if (!isWin) continue;

    winner = cells[a];
    break;
  }

  return winner;
};
