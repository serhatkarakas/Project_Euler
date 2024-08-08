/*If we list all the natural numbers below 
 that are multiples of 
 or 
, we get 
 and 
. The sum of these multiples is 
.

Find the sum of all the multiples of 
 or 
 below 
.*/
function mod() {
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
    }
  }
}
mod();
