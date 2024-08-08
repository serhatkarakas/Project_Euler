function LargestPrimeFactor() {
  let num = 600851475143;
  let largestPrime = 1;

  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      largestPrime = i;
      num = num / i;
      i--;
    }
  }
  console.log("The largest prime factor of 600851475143 is: " + largestPrime);
}
LargestPrimeFactor();
