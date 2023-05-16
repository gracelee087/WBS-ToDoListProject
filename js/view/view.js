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
      /**
       * Edit Button settings
       */
      const pencil = document.createElement('button')
      pencil.classList.add("but", "pencil");
      pencil.innerHTML = "<i class=\"bi bi-pencil\"></i>"
      /**
       * Undo Button settings
       */
      const undo = document.createElement('button')
      undo.innerHTML = "<i class=\"fas fa-undo-alt\"></i>"

      /**
       * Trash Button settings
       */
      const trash = document.createElement('button')
      trash.classList.add("but", "trash");
      trash.setAttribute("value", `${task.getId}`)
      trash.innerHTML = "<i class=\"fa fa-trash\">"
      trash.addEventListener("click", () => {
        this.remove(trash.getAttribute("value"))
      })

      /**
       * Check button settings
       */
      const check = document.createElement('button')
      check.classList.add("but", "check");
      check.innerHTML = "<i class=\"fa fa-check\"></i>"

      if (task.getIsComplete) {
        tasDiv.classList.add("task-done")
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
