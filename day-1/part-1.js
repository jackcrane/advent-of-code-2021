import { readFileSync } from 'fs';
import 'colors';

let previous = -1;
let count = 0;

if(process.argv[2] == '--test') {

}

readFileSync(process.argv[2] == '--test' ? 'input-test.txt' : 'input.txt', 'utf8').split('\n').forEach((line, i) => {
  console.log(i, line, line > previous ? 'increased'.green : 'decreased'.red);
  if(line > previous) {
    count++;
  }
  previous = line;
});

console.log('solution:', count.toString().blue)