/** 
 * what is argument and parameters 
 * 
 * functon Tanju(playing , gmaes )
 * here - playing and games are parameters 
 * 
 * 
 * after finishing the funciton when i will call that i will pass an argument of values there , 
 * 
 * 
 *tanju(CounterStrike_2 , FPS); 

 the counterstrike_2 and fps here is the argument
 */

 function addTwoNumbs (number1, number2){ 

  return number1 + number2; 

 }

//  console.log(addTwoNumbs(23,22)); 

function shopingCart (val1 , val2 , ...num1){ 

  return num1 ;
}

console.log(shopingCart(20,40,50,877)); /**here the the values are assigned on val1 and val2 , and the rest values 
are defined inside the sprade operator here ...num1 
now : you can call it a rest operator and you can simply call it with rest parameter. */


const myArray = [10,33,5532,22,29, 10 ]; 


function returnSecondValue(getArray){ 
  return getArray[1]; 
}

console.log(returnSecondValue(myArray)); 



function secondArray (objectHere){ 

  let result = []; 
  let i = 0; 
 while (i < objectHere.length){ 
  result.push(objectHere[i])
  i++; 
 }
 return result; 
}
console.log(secondArray(myArray));