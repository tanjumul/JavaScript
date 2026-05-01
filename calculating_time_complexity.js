// function sumOfArray (nums){ 
//   let sum = 0; 
//   for (let i = 0; i< nums.length; i++){    // it will run 'n' time in the loop
//     sum += nums[i]; 

//   }

//   return sum; // this will return in 1 time. 

// }

/* it will execute the every single time and it will do the two task it will go through the loop and then 
it will return the sum from the bottom. 
so it depends on N+2 this O(N+2) we can ignore the additional numbering 
while it becomes insignificant after some time , it's okay to be ^2 but if it 
occurs ^6 then that become irrelevant */



// Another example of N^2 

/* 
3*3 matrix 

[1,3,5]
[3,2,6]
function sumOfMatrix (num){ 

let sum = 0;  //once 
for ( let i =0; i < num.length; i ++){   // this whole loop will run 3 time
  for(let j = 0 ; j<num.length; j++){  // this will also do the same
  
  sum+= num[i][j]
  }


}

return sum;  //it will run like 1 
}


here tanjumul you can see , the loop for i and j will run consicutively 3*3 time 
if i consider them as N then it will run N*N time which i can also call it out as 
n^2
so the complexity will be for this code is : O(n^2); 



comming up the next one : 
So you know the H-index right ? the ratio of the amount of the 
papers and the amount of the citatins you get from the internet right ? 

Now; 

you have a code where you calculate a given number's squared in base 2; then you do : 


funciton findSquareBaseTwo(num){ 

let arr=[]; 

for (let i =1; i<nums ; i = i*2){
//reason to take the i = i*2 , here i used to start indexing from 1 then 
// when i start incrementing it by i*2 = it will hop everytime in the even number; 
//then every even number will help me to achive the squared version of the number
// then time it stoped and the indexing will be the power of my base 2 to get the inputed number; 

arr.push(i); //if i push now to the array the even number, then 


}
return arr; 
// here if i give 1024 then it will be doing like this
 }


/* 
 if(i<nums) then (i = i*1) , remember i = 1 ; then i*2 = 2 , i*2 = 4 , i*2= 8 ....
          1  2   3    4    5    6    7     8    9     10 
1024 =  [2] [4] [8] [16] [32] [64] [128] [256] [512]  []   // 0th indexing it turned to a 10 indexed array here it stops coz the condition breaks the counting .


in this case the time complexity becomes like the base 2 and the power of 10 , 10 because if we do the 2^10 and the arr  is also pointing to arr[10] then we can denote like (log2N)


Remember : if you have a num like var , then it is cut down to reminder or multiplied then it will be like the 
way of O(logN)
*/
