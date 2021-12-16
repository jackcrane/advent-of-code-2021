let fisharr = fishes.split(',');
let bucket = Array(9).fill(0);

fisharr.map((fish) => bucket[+fish]++);
for (let i = 0; ++i < 256; ) {
  bucket[(7 + i) % 9] += bucket[i % 9];
}
console.log(bucket.reduce((a, x) => a + x, 0));
