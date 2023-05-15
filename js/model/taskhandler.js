import Task from "./task.js"

export default class TaskHandler {
  constructor() {
    this.tasks = {}
    this.visibleTasks = []
  }
  get getAllTasks() {
    //return alle Tasks
    return Object.values(this.tasks);
  }
  get getVisibleTasks() {
    return this.visibleTasks
  }

  randomIdGenerator() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return "_" + Math.random().toString(36).substring(2, 9);
  }

  createTask(content) {
    const newTask = new Task(this.randomIdGenerator(), content)
    this.tasks[newTask.getId] = newTask;
    console.log(newTask);
    console.log(this.tasks);

  }

  removeTask(id) {
    console.log(this.tasks)
    delete this.tasks[id];
    console.log(this.tasks)
  }
}