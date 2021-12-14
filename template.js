import { readFileSync } from 'fs';
import 'colors';

let lines = readFileSync(process.argv[2] == '--test' ? 'input-test.txt' : 'input.txt', 'utf8').split('\n');

lines.forEach((line, i) => {
  
});

// TODO: replace the solution variable with the variable holding the solution
console.log('solution:', solution.toString().blue)