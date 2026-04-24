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


console.log(hishab_kitab(264));

/* Understanding Function Return in JavaScript

Here I created a function where the parameter is `num`. Then I declared a variable `sum = 0`, which is 0 at the beginning. I used a `while` loop because I don’t know how many times it will run.

Inside the loop, I check if `num > 0`. Then I take the last digit using `num % 10` and add it to `sum`. After that, I remove the last digit using `Math.floor(num / 10)`. This process keeps going until `num` becomes 0.

After finishing the loop, I wrote:

```
return sum;
```

This means the function is sending back the final value of `sum`.

Now if I call the function like this:

```
hishab_kitab(144);
```

it will calculate everything correctly, but I won’t see anything. That’s because the function is just returning the value, not showing it.

If I want to see the output, I need to do:

```
console.log(hishab_kitab(144));
```

So what happens here is the function runs with `num = 144`, it calculates the sum which is 9, then `return sum` gives that value back, and `console.log` shows it.

I can also store it like this:

```
let result = hishab_kitab(144);
```

Now `result` is 9, and I can use it anywhere in my code.

The main idea is the function does the calculation and returns the value. If I want to see it, I have to print it or store it somewhere.
 */