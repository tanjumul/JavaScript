#  Question & then the solutions <br>

1. You have to print numbers n = 10; loop thorough the number and print that in console. 
[task] : You can use Dom to take from the input field then put it in the console. 

#HTML
```HTML 
<!DOCTYPE html>
<html>
  <head>
    <title>Day1</title>
  </head>
  <body>
    <h1>Welcome to Day-1 DSA </h1>
    
    <input type="text" placeholder="Enter the number" class="givein">


    <button class="subs" onclick="
   calculate(); 
    ">Submit</button>

    <p class="param"></p>
    <script src="./dsa-1.js">
      
    </script>
  </body>
</html>
```

```javascript 

// const num = prompt('Enter your number for the loop ! ');  

function calculate ()
{ 
const takeNumber = document.querySelector('.givein'); 
const Intlen = takeNumber.value; 

  for(let i=1; i<=Intlen; i++){ 
  console.log(i); 
}
console.log(takeNumber); 
}



```


2. Print numbers from N to 1 without changing the loop condition above. 
  - input : 5 
  - output 5 , 4, 3, 2, 1


```javascript 
let num = 10 ; 
for (let i =1 ; i<=num; i++){ 
  let number = num - i+1; 
}
console.log(number); 
```


3. Take out the even numbers from the inputed value above : 
 
 input num : 10 
 output : 2 , 4, 6, 8 , 10 

 ```javascript 
 const num = 10; 

for(let i =1; i<= num ; i++){ 
  if(i%2 == 0 ){ 
    console.log(` even num : ${i}`); 
  } else{ 
    console.log(`this is the odd num : ${i}`); 
  }
}
```


4. Print the sum of the first N natural numbers : 
  - input : 5 <br>
  - output : 15 
  - complexity : O(n)

### Option Red : 

``` javascript 
num = 5; 

let sum = num * (num +1) / 2; 
console.log(sum); 
```

### Option Blue : 


```javascript 

let num = 5; 
let sum = 0
for (let i = 1; i<=num; i++){ 
   sum = sum + i; 
}
console.log(sum); 

```


5.Factorial of N  : 
- input : 5 
- output : 120 

```javascript 


```