/* return a function that returns all the natural numbers from 1 to n 
sum of 1 to 5 which is : 15 */

function sumOfNaturalnumber(num){ 
  let sum = 0 ; 

  for (let i =1 ; i<=num; i++){ 
sum+=i; 

}
return sum; 

}

console.log(sumOfNaturalnumber(5)); 
