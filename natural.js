// /* return a function that returns all the natural numbers from 1 to n 
// sum of 1 to 5 which is : 15 */

// function sumOfNaturalnumber(num){ 
//   let sum = 0 ; 

//   for (let i =1 ; i<=num; i++){ 
// sum+=i; 

// }
// return sum; 

// }

// console.log(sumOfNaturalnumber(5)); 



// function sum_of_natural(num){ 
//   let sum = 0 ; 

//   for(let i =1; i<=num; i++){ 
//     sum+=i; 
//   }
//   return sum; 

// }

// console.log(sum_of_natural(6)); 




/* Another way to do the same thing is  */

function natural_num_fast(num){ 
  return num*(num+1)/2; //this is the formula  , you should've known this, okay ! 
}
console.log(natural_num_fast(5)); 