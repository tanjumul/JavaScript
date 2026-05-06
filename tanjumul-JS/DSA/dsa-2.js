/**previous practice */

function DiviSor(num){ 

  let n = []; 
  for(let i =1 ; i <=num ; i++){ 
    if(i%3 ==0 && i%5==0){ 
      n.push(i); 
    }
  } 

    for(let j = 0; j<n.length; j++){ 
     console.log(n[j]); 
    }
     return n; 
  }



console.log(DiviSor(30)); 