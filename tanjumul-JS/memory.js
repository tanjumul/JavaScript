/** stack and Heap */

// stack : uses all primitive types 

// heap : uses all non-primitive types 

let mySteamName = 'Tanjumul_GL'; 

let anotherName = mySteamName; 
anotherName = 'John Doe'; 

console.log(mySteamName); 
console.log(anotherName); 


let userTanj = { 
  email: 'Tanjumul@nas.com', 
  bkash : 'Bkash_theke_Nahid'
}  

let userAlom = { 
  email : 'Alom@grab.com', 
  taptap : 'millions.t'
}

 userTanj = userAlom; 

console.log(userAlom.email); 
console.log(userTanj.email); 