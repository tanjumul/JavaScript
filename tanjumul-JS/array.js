

const myArr = [0,1,2,3,4,5,6]
console.log(typeof myArr); 
const myHeros = ["Superman", "Batman"]; 

const myArr2 = new Array(1,3,4,2); 


console.log(myArr[1]);
console.log(myArr2[1]); 


console.log(myHeros[0]);

//Array Methods 


myArr.push(7); 

myArr.pop(7); 

console.log(myArr); 



myArr.unshift(9); 
console.log(myArr); 

myArr.shift(); 
console.log(myArr); /* removing the first bit of the array or the starting index value of the array !  */

//agin if i try : 

myArr.shift(); //it will shift from the 0 , i mean it will takeout 0 and start from the 1. 

console.log(myArr)

/**changing the type of the array inputs from integers to string  */


const newArr = myArr.join (); 

console.log('Converting from integer to string')
console.log( myArr); 
console.log(newArr); 
console.log(typeof newArr); 

//slice , splice 

const ar1 = myArr; 
console.log('Original' , ar1); 

const ar3 = myArr.slice(1,3); 
console.log('Original-after-slice',myArr); 
console.log('slice',ar3);

const ar2 = myArr.splice(0,3); 
console.log('Original-after-splice' , ar1); 
console.log('splice',ar2); 


/** splice removes the elements from the declared array and the arry is manupulated 
 * 
 * slice- it takeout the declared elements but don't change the original array where splice does the changes ! 
 * 
 */