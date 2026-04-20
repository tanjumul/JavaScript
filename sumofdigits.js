/*sum of digits of a number big numbers iike 
144 what will the sum of the digits individual like : 
1+4+4 = 9 ; this will be the digits of the sum okay ?  */

function hishab_kitab(num){ 

  let sum =0; 

  while(num>0){
    sum+=num%10; 
    num=Math.floor(num/10); 

  }
return sum;
}


console.log(hishab_kitab(144));