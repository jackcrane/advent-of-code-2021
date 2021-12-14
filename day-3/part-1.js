import { readFileSync } from 'fs';
import 'colors';

let lines = readFileSync(process.argv[2] == '--test' ? 'input-test.txt' : 'input.txt', 'utf8').split('\n');

let gamma;
let epsilon;
let winners = [];
let loosers = [];

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
  winners.push(ones > zeroes ? '1' : '0');
  loosers.push(ones > zeroes ? '0' : '1');
}

gamma = parseInt(winners.join(''), 2);
epsilon = parseInt(loosers.join(''), 2);

console.log('gamma:', gamma.toString().green, 'epsilon:', epsilon.toString().green, 'product:', (gamma * epsilon).toString().blue);