
const todolist = []; 

function addTodo (){ 
  const inputElement =  document.querySelector('.js-input-name'); 

  const name = inputElement.value ; 
  console.log(name); 

  todolist.push(name); 
  console.log(todolist); 

  inputElement.value = ' '; 
  


}