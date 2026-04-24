function digit(num){
let sum = 0; while(num>0){
  sum++
  num = Math.floor(num/10)
 }
  return sum;
}

console.log(digit(1094572345));