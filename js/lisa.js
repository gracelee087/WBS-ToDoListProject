let userInput = document.querySelector(".task-input");
let addButton = document.querySelector(".button-add");
let tabs = document.querySelectorAll(".tab-type div");
let underLine = document.getElementById("tab-underline");
let taskList = [];
let selectedMenu = "tab-all";
let filteredList = [];

const addEditEvents = () => {
  console.log("call Event adder")
  const edits = document.querySelectorAll(".pencil")
  edits.forEach(element => {
    console.log(element);
    element.addEventListener("click", (e) => {
      edit(e);
    })
  })
}
const addInputvents = () => {
  const inputs = document.querySelectorAll(".task input")
  inputs.forEach(element => {
    element.addEventListener("focusout", (e) => {
      console.log("focusout")
      console.log(element.dataset.task)
      let task = getTaskById(element.dataset.task)
      console.log("this task")
      console.log(task)
      console.log("after")
      task.content = element.value
      render()
    })
  })

}

addButton.addEventListener("mousedown", addTask);
userInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    addTask(event);
  }
});
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    filter(event);
  });
}

function addTask() {
  let taskValue = userInput.value;
  let task = {
    content: taskValue,
    isComplete: false,
    id: randomIDGenerator(),
  };

  taskList.push(task);
  userInput.value = "";
  addButton.disabled = true; //Disabling for not being able to add empty tasks
  render();
}

function render() {
  let result = "";
  list = [];
  if (selectedMenu === "tab-all") {
    list = taskList;
  } else {
    list = filteredList;
  }

  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete) {
      result += `<div class="task task-done" id="${list[i].id}">
      
            <span>${list[i].content}</span>
            <div class="button-box">
            <button class="check"onclick="toggleDone('${list[i].id}')"><i class="fas fa-undo-alt"></i></button>
            <button class="trash" onclick="deleteTask('${list[i].id}')"><i class="fa fa-trash"></i></button>
            </div>
        </div>`;
    } else {
      result += `<div class="task" id="${list[i].id}" >            
            <span>${list[i].content}</span>
            <input type="text" class="d-none" data-task="${list[i].id}">
            <div class="button-box">
            <button class="but pencil" value="${list[i].id}"><i class="bi bi-pencil"></i></button>
            <button class="but check" onclick="toggleDone('${list[i].id}')"><i class="fa fa-check"></i></button>
            <button class="but trash" onclick="deleteTask('${list[i].id}')"><i class="fa fa-trash"></i></button>
            </div>
        </div>`;
    }

  }

  document.getElementById("task-board").innerHTML = result;
  addEditEvents();
  addInputvents();
}

function toggleDone(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  filter();
}

function deleteTask(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === id) {
      taskList.splice(i, 1);
    }
  }

  filter();
}
function filter(e) {
  if (e) {
    selectedMenu = e.target.id;
    underLine.style.width = e.target.offsetWidth + "px";
    underLine.style.left = e.target.offsetLeft + "px";
    underLine.style.top =
      e.target.offsetTop + (e.target.offsetHeight - 4) + "px";
  }

  filteredList = [];
  if (selectedMenu === "tab-not-done") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == false) {
        filteredList.push(taskList[i]);
      }
    }
  } else if (selectedMenu === "tab-done") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete) {
        filteredList.push(taskList[i]);
      }
    }
  }
  render();
}

function randomIDGenerator() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return "_" + Math.random().toString(36).substr(2, 9);
}

const getTaskById = (id) => {
  return taskList.filter((task) => task.id === id)[0];
}

const edit = (e) => {
  console.log("call edit")
  // console.log(e.currentTarget.value)
  let id = e.currentTarget.value
  let focus = document.querySelector(`#${id}`)
  // console.log(focus)
  let selectedSpanValue = focus.querySelector("span").textContent
  let selectedInput = focus.querySelector("input")

  selectedInput.value = selectedSpanValue;
  focus.querySelector("span").classList.toggle("d-none")

  focus.querySelector("input").classList.toggle("d-none")
  selectedInput.focus()
}

