
let score = null; 

console.log(typeof score); 
console.log(typeof (score)); 

let ValidNumber = Number(score); 
console.log(typeof (ValidNumber)); 
console.log(ValidNumber); 

/** when it's a '101' it will convert easily but when it is 
 * '101Tanjumul' mixed string + number then it turns to be very unusual in conversion 
 * '101Tanjumul' => NaN 
 * true => 1 ; 
 * false => 0; 
 */



isLoggedIn = 1 ; 

let boolisLoggedIn = Boolean(isLoggedIn); 
console.log(boolisLoggedIn); 

let isBoolean2 = false; 

let boolisBoolean2 =Boolean(isBoolean2); 
console.log(boolisBoolean2); 


//when you use the 1 and convert it in the boolean then it gives like true , when youuse a string it will gives you a true , when you send it a null/0 / empty string it will send false , or 0 