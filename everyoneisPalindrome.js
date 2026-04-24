
function pallindrom (num){ 

  let original = num;   
  let new_num = 0; 

  while(num > 0){ 
   let digit = num%10; 
    new_num = new_num*10 + digit ;

    num = Math.floor(num/10);
  }
  return original === new_num;

 
}


console.log(pallindrom(111))

/* this is just a bool statement here. */