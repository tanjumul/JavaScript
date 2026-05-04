
// // const num = prompt('Enter your number for the loop ! ');  

// function calculate ()
// { 
// const takeNumber = document.querySelector('.givein'); 
// const Intlen = takeNumber.value; 

//   for(let i=1; i<=Intlen; i++){ 

//   let contains = Intlen - i+1; 
//   console.log(contains);
// }
// console.log(takeNumber); 
// }


const num = 10; 

for(let i =1; i<= num ; i++){ 
  if(i%2 == 0 ){ 
    console.log(` even num : ${i}`); 
  } else{ 
    console.log(`this is the odd num : ${i}`); 
  }
}