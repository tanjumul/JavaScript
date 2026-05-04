#First the querion Then the solution <br>
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