function sumSquare() {
  let sumSquare = 0,
    sum = 0,
    sumsum = 0;
  for (i = 1; i < 101; i++) {
    sumSquare = i * i;
    sum = +sumSquare;
    sumsum = +sum * sum;
  }
  console.log(sumsum - sum);
}
sumSquare();
