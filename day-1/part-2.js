import { readFileSync } from 'fs';
import 'colors';

let previous = -1;
let count = 0;

if(process.argv[2] == '--test') {

}

let lines = readFileSync(process.argv[2] == '--test' ? 'input-test.txt' : 'input.txt', 'utf8').split('\n');

lines.forEach((line, i) => {
  if(i < lines.length - 2) {

    let new_ = parseInt(line) + parseInt(lines[i + 1]) + parseInt(lines[i + 2]);

    // console.log(new_)

    console.log(i, line, new_, new_ > previous ? 'increased'.green : 'decreased'.red);
    if(new_ > previous) {
      if(i > 0) count++;
    }
    previous = new_;
  }
});

console.log('solution:', count.toString().blue)