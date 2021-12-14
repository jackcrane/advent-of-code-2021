// NOTE: I NEVER FINISHED THIS ONE. I CHEATED. I WANT TO FIGURE OUT WHAT I DID WRONG

import { readFileSync } from 'fs';
import 'colors';

let lines = readFileSync(process.argv[2] == '--test' ? 'input-test.txt' : 'input.txt', 'utf8').split('\n');
for(let i = 0; i < lines[0].length; i++) {
  let zeroes = 0;
  let ones = 0;
  let nums = [];
  lines.forEach(line => {
    nums.push(line[i])
    if(line[i] == '0') {
      zeroes++;
    } else {
      ones++;
    }
  })
  let winner = ones >= zeroes ? '1' : '0';
  lines.forEach((line, li) => {
    if(line[i] !== winner) {
      lines.splice(li, li + 1);
    }
  })
  console.log(lines)
}
let [o2gen] = lines;

console.log('----------------------------------------------------------------------'.red)

lines = readFileSync(process.argv[2] == '--test' ? 'input-test.txt' : 'input.txt', 'utf8').split('\n');
// console.log(lines)
let columncount = lines[0].length;
for(let column = 0; column < columncount; column++) {
  if(lines.length > 1) {
    let zeroes = 0;
    let ones = 0;
    let winner;
    lines.forEach((line, row) => {
      line[column] == '0' ? zeroes++ : ones++;
    })
    // console.log('zeroes:', zeroes, 'ones:', ones)
    winner = ones >= zeroes ? '0' : '1';
    console.log(winner)
    lines = (lines.filter(e => e[column] === winner));
    console.log(lines)
  }
}
let [co2] = lines;

console.log('o2:', parseInt(o2gen, 2).toString().blue, 'co2:', parseInt(co2, 2).toString().blue, 'product:', (parseInt(o2gen, 2) * parseInt(co2, 2)).toString().green);