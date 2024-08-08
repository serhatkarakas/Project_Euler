let cache = [1, 2];

function fibonnacci(i) {
  if (cache[i]) {
    return cache[i];
  }
  cache[i] = fibonnacci(i - 1) + fibonnacci(i - 2);
  return cache[i];
}

function ligma() {
  let sum = 0;
  for (let i = 0; i < 4000000; i++) {
    sum = fibonnacci(i);
    if (fibonnacci(i) > 4000000) {
      break;
    }
    console.log(sum);
  }
}
ligma();
