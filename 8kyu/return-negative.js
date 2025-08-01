let a = makeNegative(0);
console.log(a);

function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else if (num < 0 || num === 0) {
    return num;
  }
}