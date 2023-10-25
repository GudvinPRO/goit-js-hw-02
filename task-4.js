function calculateEvenTotal(number) {
    let res = 0;
    for (let i = 0; i <= number; i += 2) {   
     res += i; } return res;
 }
 console.log(calculateEvenTotal(1));
 console.log(calculateEvenTotal(3));
 console.log(calculateEvenTotal(7));
 console.log(calculateEvenTotal(18));
 console.log(calculateEvenTotal(27));