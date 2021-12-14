import { readFileSync } from "fs";
import "colors";
import "core-js/features/string/replace-all.js";

let won = false;

let [cards, ...boards] = readFileSync(
  process.argv[2] == "--test" ? "input-test.txt" : "input.txt",
  "utf8"
).split("\n\n");
let boardbools = [];
let boardstates = [];
cards = cards.split(",");

for (let i = 0; i < boards.length; i++) {
  boardbools.push([
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ]);
  boardstates.push([
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
  ]);
}

boards = boards.map((board) => {
  let nboard = [];
  nboard = board.split("\n");
  nboard = nboard.map((row) => {
    row = row.indexOf(" ") == "0" ? row.substring(1) : row;
    row = row.replaceAll("  ", " ");
    return row.split(" ");
  });
  return nboard;
});

const deep_find = (arr, find) => {
  let found_x;
  let found_y;
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] == find) {
        found_x = row;
        found_y = col;
      }
    }
  }
  return { row: found_x, col: found_y };
};

const deep_replace = (arr, find, replace) => {
  const { row, col } = deep_find(arr, find);
  if (row !== undefined && col !== undefined) {
    arr[row][col] = replace;
  }
  return arr;
};

const deep_add = (arr) => {
  let sum = 0;
  arr.forEach((row) => {
    row.forEach((col) => {
      if (col !== null) {
        sum += parseInt(col);
      }
    });
  });
  return sum;
};

const check_win = (board, unmarked_board) => {
  for (let i = 0; i < 4; i++) {
    if (
      board[0][i] !== null &&
      board[1][i] !== null &&
      board[2][i] !== null &&
      board[3][i] !== null &&
      board[4][i] !== null
    ) {
      let cloned_board = unmarked_board;

      called.forEach((card) => {
        cloned_board = deep_replace(unmarked_board, card, 0);
      });

      let unscored_sum = deep_add(cloned_board);
      let last_card = called[called.length - 1];

      return {
        win: true,
        score: unscored_sum * last_card,
      };
    }
  }

  for (let i = 0; i < 4; i++) {
    if (
      board[i][0] !== null &&
      board[i][1] !== null &&
      board[i][2] !== null &&
      board[i][3] !== null &&
      board[i][4] !== null
    ) {
      let cloned_board = unmarked_board;

      called.forEach((card) => {
        cloned_board = deep_replace(unmarked_board, card, 0);
      });

      let unscored_sum = deep_add(cloned_board);
      let last_card = called[called.length - 1];

      return {
        win: true,
        score: unscored_sum * last_card,
      };
    }
  }

  return {
    win: false,
    score: 0,
  };
};

let iterator = 0;
let called = [];
while (!won) {
  let card = cards[iterator];
  called.push(card);
  for (let board = 0; board < boards.length; board++) {
    let { row, col } = deep_find(boards[board], card);
    if (row !== undefined && col !== undefined) {
      boardbools[board][row][col] = true;
      boardstates[board][row][col] = card;
      let { win, score } = check_win(boardstates[board], boards[board]);
      if (win) {
        console.log(
          "board",
          board.toString().blue,
          "will win with a score of",
          score.toString().green
        );
        won = true;
        break;
      }
    }
  }

  iterator++;
}
