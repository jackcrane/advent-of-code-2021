import { readFileSync } from 'fs';
import 'colors';

let lines = readFileSync(
  process.argv[2] == '--test' ? 'input-test.txt' : 'input.txt',
  'utf8'
).split('\n');
lines = lines.map((line) => {
  let l = line.split(' -> ');
  return l.map((entry) => entry.split(','));
});

let points = [];
lines.forEach((line) => {
  let [x1, y1] = line[0];
  let [x2, y2] = line[1];
  let slope = (y2 - y1) / (x2 - x1);
  if (Math.abs(slope) == Infinity || Math.abs(slope) == 0) {
    switch (Math.abs(slope)) {
      case Infinity:
        if (line[0][1] <= line[1][1]) {
          for (let i = line[0][1]; i <= line[1][1]; i++) {
            points.push([line[0][0].toString(), i.toString()]);
          }
        } else {
          for (let i = line[1][1]; i <= line[0][1]; i++) {
            points.push([line[0][0].toString(), i.toString()]);
          }
        }
        break;
      case 0:
        if (line[0][0] <= line[1][0]) {
          for (let i = line[0][0]; i <= line[1][0]; i++) {
            points.push([i.toString(), line[0][1].toString()]);
          }
        } else {
          for (let i = line[1][0]; i <= line[0][0]; i++) {
            points.push([i.toString(), line[0][1].toString()]);
          }
        }
        break;
    }
  }
});

let print = new Array();

var count = {};
let occurances = 0;
points.forEach(function (i) {
  count[i] = (count[i] || 0) + 1;
  if (count[i] > 1) {
    occurances++;
    // console.log(count[i]);
  }
});
// console.log(count);
console.log(occurances);
