import View from "../view/view.js"
import TaskHandler from "../model/taskhandler.js"

console.log("start")
const taskHandler = new TaskHandler();
console.log("taskHandler")
const view = new View;
console.log("view")

const createTask = (content) => {
  taskHandler.createTask(content);
}

const addAddEvent = () => {
  view.addAddButtonClickListener(createTask);
}

//App run
console.log('run')
addAddEvent();

