export default class View {

  constructor() {
    this.userInput = document.querySelector(".task-input");
    this.addButton = document.querySelector(".button-add");
    this.taskBoard = document.querySelector("#task-board")
  }
  addAddButtonClickListener(func) {
    console.log("adding listener")
    this.addButton.addEventListener("click", () => {
      func(this.userInput.value)
    })
  }

  setRemoveClickFunction(remove) {
    this.remove = remove
  }

  render(tasks) {
    this.taskBoard.replaceChildren()
    tasks.forEach(task => {
      const tasDiv = document.createElement('div')
      tasDiv.classList.add("task")
      const span = document.createElement('span')
      span.textContent = `${task.getContent}`
      const inp = document.createElement('input');
      const buttonBox = document.createElement("div")
      const pencil = document.createElement('button')
      const undo = document.createElement('button')
      const trash = document.createElement('button')
      trash.setAttribute("value", `${task.getId}`)
      trash.addEventListener("click", () => {
        this.remove(trash.getAttribute("value"))
      })

      const check = document.createElement('button')
      pencil.innerHTML = "<i class=\"bi bi-pencil\"></i>"
      undo.innerHTML = "<i class=\"fas fa-undo-alt\"></i>"
      trash.innerHTML = "<i class=\"fa fa-trash\">"
      check.innerHTML = "<i class=\"fa fa-check\"></i>"


      if (task.getIsComplete) {
        buttonBox.appendChild(undo)
        buttonBox.appendChild(trash)


      } else {
        buttonBox.appendChild(pencil)
        buttonBox.appendChild(check)
        buttonBox.appendChild(trash)

      }
      tasDiv.appendChild(span)
      buttonBox.classList.add("button-box")
      tasDiv.appendChild(buttonBox)
      this.taskBoard.appendChild(tasDiv)
    });
  }
}
