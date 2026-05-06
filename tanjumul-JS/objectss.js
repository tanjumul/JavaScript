//singleton : 1 object 
//object literals 


const mySymble = Symbol('key1');
const jsUser ={ 
  name : 'Tanjumul', 
  age: 26, 
  'full name' : 'Tanjumul Alom',
  location : 'Gaibandha',
  email : 'tanjumul@aylo.com', 
  isLoggedIn : false , 
  lastLoginDays : ["Monday", "friday"] , 
  [mySymble] : 'mykey'

}

console.log(jsUser.age); 
console.log(jsUser['email']); 
console.log(jsUser['full name']); 
console.log(jsUser[mySymble]);
console.log(typeof jsUser[mySymble]);

jsUser.email = 'Tanjumul.gpt@gmail.com';
// Object.freeze(jsUser); 

jsUser.email= 'tanjumul@microsoft.com';

console.log(jsUser); 


jsUser.greetings = function(){ 
  console.log('Hello , Js user ! '); 
}

console.log(jsUser.greetings());

console.log(jsUser);



//destructuring 

const course = 
{ 
   course : 'Blockchain',
   price : 'free', 
   courseInstructure : 'Harverd Graduate friend of mine'
}

console.log(course.courseInstructure); 

const {courseInstructure : teacherTanju} = course; // or  you can use this 
/** const {courseInstructure } = course;  */

console.log(teacherTanju); 

