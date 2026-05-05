
const todolist = ['make dinner ', 'wash dishes']; 

let todoListHtml = ' '; 

for(let i = 0 ; i< todolist.length; i++){
const todo = todolist[i];
const html = `<p> ${todo}</p>`;
todoListHtml += html; 
}
console.log(todoListHtml); 
function addTodo (){ 
  const inputElement =  document.querySelector('.js-input-name'); 

  const name = inputElement.value ; 
  inputElement.value = ' '; 
  console.log(name); 

  todolist.push(name); 
  console.log(todolist); 

  

  const para = document.querySelector('.writes'); 
  para.innerHTML = `${name}`;
 

}