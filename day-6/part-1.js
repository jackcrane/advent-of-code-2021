import { readFileSync } from 'fs';
import 'colors';

let fishes = readFileSync(
  process.argv[2] == '--test' ? 'input-test.txt' : 'input.txt',
  'utf8'
).split(',');
fishes = fishes.map((fish) => parseInt(fish));
console.log(fishes);

for (let i = 0; i < 80; i++) {
  fishes.forEach((fish, fishnum) => {
    if (fish == 0) {
      fishes[fishnum] = 6;
      fishes.push(8);
    } else {
      fishes[fishnum] = fish -= 1;
    }
  });
}

let solution = fishes.length;

console.log('solution:', solution.toString().blue);
