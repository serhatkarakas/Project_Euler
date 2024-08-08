function primeNumber() {
  const a = [2];
  for (let i = 3; a.length < 10001; i++) {
    let isPrime = true;
    for (let j = 0; j < a.length; j++) {
      if (i % a[j] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      a.push(i);
    }
  }
  console.log(a.splice(-1, 1));
}
primeNumber();
