function fibonnacci() {
  let a = 0;
  let b = 1;
  let sum = 0;
  while (a <= 4000000) {
    if (a % 2 === 0) {
      sum += a;
    }
    let temp = a;
    a = b;
    b = temp + b;
    console.log(sum);
  }
  
}
fibonnacci();