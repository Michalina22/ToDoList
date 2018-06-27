function showTasks() {
    var localStorageTask=JSON.parse(localStorage['tasks']);
    localStorageTask.forEach(function (title) {
        addNewTask(title);
    });
}

//Toggle Complete
function toggleTaskComplete(task) {
    task.classList.toggle('btn-success');
}

//Deleta Task
function deleteTask(task) {
    var liToDelete = task.closest('li');
    task.closest('ul').removeChild(liToDelete);
}
function deleteTaskfromLocalStorage(title) {
    var indexOfTask = tasks.indexOf(title);
    tasks.splice(indexOfTask, 1);
    JSONReadyTasks=JSON.stringify(tasks);
    localStorage.setItem('tasks',JSONReadyTasks);

}