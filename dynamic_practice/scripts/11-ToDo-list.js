
const todolist = ['make dinner', 'wash dishes']; 

renderTodoList(); 


function renderTodoList(){ 

let todoListHtml = ' '; 

for(let i = 0 ; i< todolist.length; i++){
const todo = todolist[i];
const html = `<p> ${todo}</p>`;
todoListHtml += html; 
}

document.querySelector('.js-todo_list').innerHTML  = todoListHtml 


}

function addTodo (){ 
  const inputElement =  document.querySelector('.js-input-name'); 

  const name = inputElement.value ; 
  inputElement.value = ' '; 
  console.log(name); 

  todolist.push(name); 
  console.log(todolist); 


  renderTodoList(); 

}