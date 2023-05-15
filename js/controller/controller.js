import View from "../view/view.js"
import TaskHandler from "../model/taskhandler.js"

console.log("start")
const taskHandler = new TaskHandler();
console.log("taskHandler")
const view = new View;
console.log("view")

const createTask = (content) => {
  taskHandler.createTask(content);
  console.log(taskHandler.getAllTasks)
  view.render(taskHandler.getAllTasks)
}

const removeTask = (id) => {
  console.log(`remove ${id}`)
  taskHandler.removeTask(id);
  view.render(taskHandler.getAllTasks)
}

const addAddEvent = () => {
  view.addAddButtonClickListener(createTask);
}

//App run
console.log('run')
addAddEvent();
view.setRemoveClickFunction(removeTask);

