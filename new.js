const container=document.getElementById('container');

function createBoard(title){
    const board=document.createElement('div');
    const heading=document.createElement('h1');
    heading.textContent=title;
    heading.dataset.title=title;
    heading.addEventListener('click',function(){
      let userInput= document.createElement('input')
      userInput.value=heading.dataset.title;
      heading.replaceWith(userInput)
      userInput.addEventListener('keydown',function(event){
        if(event.key==='Enter'){
          heading.dataset.title=userInput.value;
          heading.textContent=userInput.value
          userInput.replaceWith(heading);
          updateCount(taskArea,heading)
        }
      })
    })
    const taskArea=document.createElement('div');
    const addTask=document.createElement('button');
    addTask.classList.add('add-Task-Btn');
    addTask.textContent='Add Task';
    taskArea.classList.add('taskarea');
    board.classList.add('board');
    board.appendChild(heading);
    board.appendChild(taskArea);
    board.appendChild(addTask);

    addATask(addTask,taskArea,heading)
    return board;
   
}

document.addEventListener('DOMContentLoaded',function(){
    
   const displayBoard= createBoard('todo');
    container.appendChild(displayBoard);
})

function addATask(addTaskButton,taskArea,heading){
  addTaskButton.addEventListener('click',function(){
  const taskName=document.createElement('input');
  taskName.placeholder='Add a task';
  const saveTask=document.createElement('button')
  saveTask.textContent='save task';
  taskArea.appendChild(taskName);
  taskArea.appendChild(saveTask);

  saveTask.addEventListener('click',function(){
    const input=taskName.value;
    const task =document.createElement('div')
    task.classList.add('saved-tasks')
    let taskContent=document.createElement('div');
      let delBtn=document.createElement('button');
    taskContent.textContent=input
    delBtn.textContent='Delete'
    
    taskContent.appendChild(delBtn)
    task.appendChild(taskContent)
    taskArea.appendChild(task)
    updateCount(taskArea,heading)
    delBtn.addEventListener('click',function(){
        task.remove()
        updateCount(taskArea,heading)
    })
    
   taskName.remove();
   saveTask.remove(); 
   })
})
}
function updateCount(taskArea,heading){
const allSavedTasks=taskArea.querySelectorAll('.saved-tasks');
const total=allSavedTasks.length
if(total===0){
heading.textContent=heading.dataset.title;
}else{

heading.textContent=`${heading.dataset.title} (${total})`
}
}
