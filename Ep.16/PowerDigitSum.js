//function PowerDigitSum() {
//  let sum = 0n;
//  let value = 0;
//  sum = 2n ** 1000n;
//
//  while (sum > 0n) {
//    value += sum % 10n;
//    sum = sum / 10n;
//    console.log(sum);
//  }
//}
//PowerDigitSum();
function powerDigitSum() {
  let sum = BigInt(2) ** BigInt(1000);
  let value = 0n;

  while (sum > 0n) {
    value += sum % 10n;
    sum = sum / 10n;
  }

  return Number(value);
}

console.log(powerDigitSum());
