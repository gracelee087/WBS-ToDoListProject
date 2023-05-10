class Task {

  constructor(titel, priority = 1, dueDate = 1) {
    this.title = title
    this.priority = priority;
    this.dueDate = dueDate;
    this.completed = false;
    this.note = "";
  }

}