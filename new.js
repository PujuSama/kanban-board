const container=document.getElementById('container');

function createBoard(title){
    const board=document.createElement('div');
    const heading=document.createElement('h1');
    heading.textContent=title;
    const taskArea=document.createElement('div');
    const addTask=document.createElement('button');
    addTask.classList.add('add-Task-Btn');
    addTask.textContent='Add Task';
    taskArea.classList.add('taskarea');
    board.classList.add('board');
    board.appendChild(heading);
    board.appendChild(taskArea);
    board.appendChild(addTask);

    addATask(addTask,taskArea)
    return board;
   
}

document.addEventListener('DOMContentLoaded',function(){
    
   const displayBoard= createBoard('todo');
    container.appendChild(displayBoard);
})

function addATask(addTaskButton,area){
  addTaskButton.addEventListener('click',function(){
  const taskName=document.createElement('input');
  taskName.placeholder='Add a task';
  const saveTask=document.createElement('button')
  saveTask.textContent='save task';
  area.appendChild(taskName);
  area.appendChild(saveTask);

  saveTask.addEventListener('click',function(){
    const input=taskName.value;
    const task =document.createElement('div')
    let taskContent=document.createElement('div');
      let delBtn=document.createElement('button');
    taskContent.textContent=input
    delBtn.textContent='Delete'
    
    taskContent.appendChild(delBtn)
    task.appendChild(taskContent)
    area.appendChild(task)
    delBtn.addEventListener('click',function(){
        task.remove()
    })
    
   taskName.remove();
   saveTask.remove(); 
   })
})
}