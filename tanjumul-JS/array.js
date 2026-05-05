

const myArr = [0,1,2,3,4,5,6]
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



