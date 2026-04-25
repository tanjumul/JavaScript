function fibb(tanju) { 

  if(tanju<2){ 
  return tanju; 
}

let pre =0 , curr = 1 , nxt; 

for(let i =2; i<=tanju; i++){ 

  nxt = curr+pre; 
  pre = curr; 
  curr = nxt; 


} return nxt; 


}

console.log(fibb(9)); 