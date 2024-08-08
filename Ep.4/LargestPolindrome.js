function LargestPolindrome() {
  for (let i = 1000; i > 100; i--) {
    {
      let product = i;
      let reverse = parseInt(product.toString().split("").reverse().join(""));
      if (product === reverse) {
        console.log(product);
        break;
      }
    }
  }
}

LargestPolindrome();
