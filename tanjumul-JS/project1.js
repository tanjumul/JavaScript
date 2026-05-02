

// // const calculator = { 

// //   num1 : 0, 
// //   num2 : 0, 

// // mode : { 
// //   add : function(a,b){ 
// //     return a+b; 
// //   }
// // }

// // };

// // console.log(calculator.mode.add(22,22)); 


// const calculator = {
//   num : 10, 
//   num2 : 20,

//   add: function (){
//     return this.num + this.num2; 
//   },

//   sub: function (){ 
//     return this.num - this.num2; 

//   },

//   div : function (){ 
//     if (this.num2!== 0){ 
//       return this.num/this.num2; 
//     }
//     else{
//       return 'Please put a valid number';
//     }
//   }



// };

// console.log(calculator.add())


// const calculator = { 
  
//   num: null , 
//   num2 : null, 


//   setNumbers(a,b){
//     this.num = a; 
//     this.num2 = b;  
//   },

// add(){
//   if(this.num === null || this.num2 === null ){ 
//     return 'Set some real value and comeback again ';
//   }else { 
//     return this.num + this.num2; 

//   }
// }

// };

// calculator.setNumbers(10,22); 
// console.log(calculator.add()); 




const calculator = { 

  number1 : null ,
  number2 : null , 

  setNumbers(a,b){
this.number1 = a; 
this.number2 = b; 
return this; 
  
},

add(){ 

  if(this.number1 === null || this.number2 === null){ 
    return 'Please create a chance '; 
  }
else{ 
 return  this.number1 + this.number2 ; 
}
}
}; 
console.log(calculator.setNumbers(10,22).add()); //chaining works now 



const university = { 
  name : 'Shahjalal University of Science and Technology , Sylhet ',
  
  location : { 
  city : 'Sylhet', 
  country : 'Bangladesh'
}, 
departments : [
  'Computer Science and Engineering ', 'Softwer Engineering ', 'Electrical and Electronic Engineering ' , 
  'Industrial Production Engineering ' , 'Chemical Engineering and Polymer Science ' , '22 others ...'
], 
students : [ 
  {name : 'Tanjumul Alom Siam', registration: '20193311XX'} , 
  {name : 'Tasnimul Hasan', registration : '20193310xx'}, 
  {name : 'ER Arnob', registration:'20193311XX'}, 
  {name : 'Tanvir Rahman', registration:'20193310XX'}
]
 
}


console.log(university.name); 
console.log(university.departments[0]); 
console.log(university.students[0].name);

university.students.push({name : 'DanDaDan' , registration: 69696966969})
console.log(university.students[4].name);

university.students.forEach(student =>{ 
  console.log(`names are : ${student.name} and reg : ${student.registration} `);
})








