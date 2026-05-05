const score = 2000; 

const balance = new Number(1000); 
console.log(balance); 

const otherNumber = 123.38459594; 
/*careful while using this toPrecison method, coz you can call the inputed value as a to digit then the other digits become roundof.  */
console.log(otherNumber.toPrecision(3)); 

const hundreds  = 1000000000; 

console.log(hundreds.toLocaleString('en-IN')); 



// +++++++++++++++++++++++++++++++++    MATHS  ++++++++++++++++++++++++++++++++++++++++++++++ \\ 


console.log(Math.abs(-4)); // abs turns your negative variables into positive 

console.log(Math.round(3.23545)); 
console.log(Math.ceil(4.22)); 
console.log(Math.floor(22.4)); 

console.log(Math.min(2,33,24,200)); 

console.log(Math.max(90,22,442,44)); 


console.log(Math.round((Math.random()*10)+1));  // Math.random it will always come in range of 0 and 1 ; you can also use the Math.round / floor/ ceil ,min , max etc ; 

const min =19; 
const max = 100; 


console.log(Math.random() * (max-min + 1)); 
console.log(Math.floor(Math.random() * (max-min + 1)+ min));  /* math.random gives 0 or 1 , math.floor gives you 
the floor value , then min-max the range of the random then i used min where i can get everytime > min value */




