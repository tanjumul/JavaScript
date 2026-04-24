function entschuldigung ( num )
{
      let count = 0; 

    while (num>0){ 
      count++; 
      num = Math.floor(num/10);
    }

    return count;
}

console.log(entschuldigung(148350948));

/* here everytime the loop runs and it counting how many times the loop is 
being processing, then it's giving me a result. The use of math.floor only takes the 
real actual numbers not the fractions one. This is how it's updating with an actual number not any fractions.  */