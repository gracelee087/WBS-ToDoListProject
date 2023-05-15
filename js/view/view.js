export default class View {

  constructor() {
    this.userInput = document.querySelector(".task-input");
    this.addButton = document.querySelector(".button-add");
  }
  addAddButtonClickListener(func) {
    console.log("adding listener")
    this.addButton.addEventListener("click", () => {
      func(this.userInput.value)
    })

  }
}
