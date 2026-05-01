function sumOfArray (nums){ 
  let sum = 0; 
  for (let i = 0; i< nums.length; i++){    // it will run 'n' time in the loop
    sum += nums[i]; 

  }

  return sum; // this will return in 1 time. 

}

/* it will execute the every single time and it will do the two task it will go through the loop and then 
it will return the sum from the bottom. 
so it depends on N+2 this O(N+2) we can ignore the additional numbering 
while it becomes insignificant after some time , it's okay to be ^2 but if it 
occurs ^6 then that become irrelevant */



