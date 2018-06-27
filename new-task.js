function addNewTask(title) {
    var taskLi = document.createElement('li');
    taskLi.classList.add('single-task');
    taskLi.innerHTML = prepareTaskHTML(title);
    tasks.push(title);
    JSONReadyTasks=JSON.stringify(tasks);
    localStorage.setItem('tasks',JSONReadyTasks);

    //Events -toggle and delete
    var toggleCompleteBtn=taskLi.querySelector('.toggle-complete-btn');
    var deleteBtn=taskLi.querySelector('.delete-task-btn');

    toggleCompleteBtn.addEventListener('click', function () {
        toggleTaskComplete(this);
    });

    deleteBtn.addEventListener('click',function () {
        //delete
        deleteTask(this);
        //delete from local storage
        var ToDelete = this.closest('li');
        var TitleToDelete=ToDelete.querySelector('.form-control').value;
        deleteTaskfromLocalStorage(TitleToDelete);

    });

    //Add task to DOM
    tasksContainer.appendChild(taskLi);

}


function prepareTaskHTML(title) {
    return '<div class="input-group">' +
        '<span class="input-group-btn">' +
        '<button class="btn btn-default toggle-complete-btn"><i class="fa fa-check"></i></button>' +
        '</span>' +

        '<input type="text" class="form-control" placeholder="Tytuł zadania..." value="' + title + '" readonly>' +

        '<span class="input-group-btn">' +
        '<button class="btn btn-danger delete-task-btn"><i class="fa fa-times"></i></button>' +
        '</span>' +
        '</div>';
}

//Add new task events
function bindAddTaskEvents() {
    //On submit
    newTaskForm.addEventListener('submit', function (event) {
event.preventDefault();
var title=this.querySelector('input').value;
if(title) {
    addNewTask(title);
    newTaskForm.innerHTML=newTaskForm.innerHTML.replace(title,'');
}
    });

}