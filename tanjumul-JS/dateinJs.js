
// let newDate = new Date(); 
// console.log(newDate); 
// console.log(newDate.toString()); 

// console.log(typeof newDate); 

// console.log(newDate.toJSON());
// console.log(newDate.toTimeString()); 
// console.log(newDate.toDateString()); 
// console.log(newDate.toLocaleString()); 

let myCreatedDate = new Date(2023, 0 , 23, 5, 3); 
 
console.log(myCreatedDate.getFullYear()); 

const myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(typeof myCreatedDate.getTime()); // creating an object on the go but it will show a number on typeof. 


let newDate = new Date(); 
console.log(newDate); 
console.log(newDate.getFullYear()); 
console.log(newDate.getMonth()+1);

console.log(newDate.getDate()); 

newDate.toLocaleString('default')



