let userInput = document.querySelector(".task-input");
let addButton = document.querySelector(".button-add");


export const addAddButtonClickListener = (func) => {
  addButton.addEventListener("click", func(userInput.value))
}