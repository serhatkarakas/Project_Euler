function SelfPowers() {
  let sum = 0n;
  for (i = 0n; i < 1000; i++) {
    sum += i ** i;
  }
  console.log(sum);
}
SelfPowers();
