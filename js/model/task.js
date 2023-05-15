class Task {
  constructor(id, content) {
    this.id = id;
    this.content = content;
    this.isComplete = false;
  }

  get getId() {
    return this.id;
  }

  get getContent() {
    return this.content;
  }

  get isComplete() {
    return this.isComplete;
  }

  set setContent(content) {
    this.content = content;
  }
  toggleComplete() {
    this.isComplete = !this.isComplete;
  }

}