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

let occurances = [];

lines.forEach((line) => {
  // Find the slope of the line
  let [x1, y1] = line[0];
  let [x2, y2] = line[1];
  let slope = (y2 - y1) / (x2 - x1);
  if (Math.abs(slope) == Infinity || Math.abs(slope) == 0) {
    // Find each point the line passes through
    let points = [];
    switch (slope.toString()) {
      case 'Infinity':
        for (let i = line[0][1]; i <= line[1][1]; i++) {
          points.push([line[0][0], i]);
        }
        break;
      case '-Infinity':
        for (let i = line[1][1]; i <= line[0][1]; i++) {
          points.push([i, line[0][1]]);
        }
        break;
      case '0':
        for (let i = line[0][0]; i <= line[1][0]; i++) {
          points.push([i, line[0][1]]);
        }
        break;
    }
    console.log(points);
    // console.log(line, slope, points);
  }
});
