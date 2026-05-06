


const myinfo = { 

  name : 'Tanjumul ', 
  age : 26 , 
  degree : 'BSc in CSE'
}

const _privateData = Symbol('passwordKey'); 

myinfo[_privateData]= { 
  userName : 'tanju11', 
  password : '12345'
}


for( let i in myinfo){ 
  console.log(i); 
}

/** here is the object myinfo isn't appearing because it's symbles are hidden
 * normal loops don't see symbols 
 * 
 */


// const tinderUser = new Object(); // it's an singelton object 
// console.log(tinderUser); 

const tinderUser = { } ; 

tinderUser.name = 'Tanju'; 
tinderUser.Age = 26; 
tinderUser.isLoggedIn =  false; 
tinderUser.id = '1233ab'; 
console.log(tinderUser); 

// this is a singleton and non-singleton object that has no difference


const regularUser = { 
  email : 'Some@gmail.com', 
  fullname: { 
    userFullname : { 
      firstName : 'Tanjumul', 
      lastName : 'Alom'
    }
  }
}

console.log(regularUser.fullname.userFullname.lastName); 

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


// const obj3 = Object.assign({}, obj1,obj2,obj4); 
// const map = new Map(); 
// [obj1, obj2,obj4].forEach(obj=>{ 
//   for(let [key,value] of Object.entries(obj)){
//     if(!map.has(key)){ 
//       map.set(key,[]);
//     }
//     map.get(key).push(value);
//   }
// })

// console.log(Object.fromEntries(map)); 

const map = new Map(); 
[obj1,obj2,obj4].forEach(obj =>{ 
  for(let [key,value] of Object.entries(obj)){
    if(!map.has(key)){
      map.set(key,[]); 
    }
  }
    map.get(key).push(value); 
})
console.log(Object.fromEntries(map));

const obj5 = {1:"a", 2:"b"}
const obj6 = {3:"a", 4:"b"}
const obj7 = {5:"c", 6:"d"}

const obj8 = Object.assign({}, obj5,obj6,obj7); 
console.log(obj8); 