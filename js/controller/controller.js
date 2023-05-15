import * as view from "../view/view.js"

const taskHandler = new TaskHandler();

const createTask = (content) => {
  taskHandler.createTask(content);
}

const addAddEvent = () => {
  view.addAddButtonClickListener(createTask);
}

