/** the objects are given below , add thos in a empty array where you don't overwrite the elements 
 * 
const obj1 = { 
  1 : 'high', 
  2 : 'lure'
}

const obj2 = { 
  1: 'missyhal vai', 
  2 : 'Forward Roneie'
}

const obj4 = { 
  1 : 'ostad Eaiyemin', 
  2 : 'paglu head'
}


 */


const obj1 = { 
  1 : 'high', 
  2 : 'lure'
}

const obj2 = { 
  1: 'missyhal vai', 
  2 : 'Forward Roneie'
}

const obj4 = { 
  1 : 'ostad Eaiyemin', 
  2 : 'paglu head',
  
}

const map = new Map(); 

[obj1,obj2,obj4].forEach(obj => { 
  for([key , value] of Object.entries(obj)){ 
    if(!map.has(key)){ 
      map.set(key,[]); 
    }
    map.get(key).push(value); 
  }
})

console.log(Object.fromEntries(map)); 

