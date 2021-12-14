import { readFileSync } from 'fs';
import 'colors';

let lines = readFileSync(process.argv[2] == '--test' ? 'input-test.txt' : 'input.txt', 'utf8').split('\n');

let horizontal = 0;
let vertical = 0;

lines.forEach((line, i) => {
  let [direction, distance] = line.split(' ');
  switch(direction) {
    case 'up':
      vertical -= parseInt(distance);
      break;
    case 'down':
      vertical += parseInt(distance);
      break;
    case 'forward':
      horizontal += parseInt(distance);
      break;
  }
});

// TODO: replace the solution variable with the variable holding the solution
console.log('horizontal:', horizontal.toString().green, 'vertical:', vertical.toString().green, 'product:', (horizontal * vertical).toString().blue);