// ********************* html tasklist dom ********************* //
// parent container
const parentContainer = document.querySelector('.main-section-added');

//  Task list container
const taskListContainer = document.createElement('section');
taskListContainer.classList.add('task-list-container', 'contentContainer');

// Tab type div
const tabTypeDiv = document.createElement('div');
tabTypeDiv.classList.add('tab-type');

// Tab underline div
const tabUnderlineDiv = document.createElement('div');
tabUnderlineDiv.id = 'tab-underline';
tabTypeDiv.appendChild(tabUnderlineDiv);

// All tab button
const allTabButton = document.createElement('div');
allTabButton.classList.add('btn', 'ms-0', 'm-2', 'fw-bolder', 'fs-6');
allTabButton.id = 'tab-all';
allTabButton.style.backgroundColor = 'rgb(80, 255, 197)';
allTabButton.textContent = 'All';
tabTypeDiv.appendChild(allTabButton);

// Not Done tab button
const notDoneTabButton = document.createElement('div');
notDoneTabButton.classList.add('btn', 'm-2', 'fw-bolder', 'fs-6');
notDoneTabButton.id = 'tab-not-done';
notDoneTabButton.style.backgroundColor = 'rgb(80, 255, 197)';
notDoneTabButton.textContent = 'Not Done';
tabTypeDiv.appendChild(notDoneTabButton);

// Done tab button
const doneTabButton = document.createElement('div');
doneTabButton.classList.add('btn', 'm-2', 'fw-bolder', 'fs-6');
doneTabButton.id = 'tab-done';
doneTabButton.style.backgroundColor = 'rgb(80, 255, 197)';
doneTabButton.textContent = 'Done';
tabTypeDiv.appendChild(doneTabButton);

taskListContainer.appendChild(tabTypeDiv);

// Task board div
const taskBoardDiv = document.createElement('div');
taskBoardDiv.id = 'task-board';
taskListContainer.appendChild(taskBoardDiv);

// Append the task list container to the parent container
parentContainer.appendChild(taskListContainer);



// ********************* Event part ********************* //

let userInput = document.querySelector(".task-input");
let addButton = document.querySelector(".button-add");
let tabs = document.querySelectorAll(".tab-type div");
let underLine = document.getElementById("tab-underline");
let taskList = [];
let selectedMenu = "tab-all";  // initial value
let filteredList = [];
let removeBtn = document.querySelector('.removeAllbtn');


//Adding Eventlistener before calling
//Elvis start
/**
 * Adding eventlistener to the edit buttons
 */
const addEditEvents = () => {
  // console.log("call Event adder")
  const edits = document.querySelectorAll(".pencil")
  edits.forEach(element => {
    // console.log(element);
    element.addEventListener("click", (e) => {
      edit(e);
    })
  })
}

/**
 * Editing value of Task when focus changes from input to somwhere else
 */
const addInputvents = () => {
  const inputs = document.querySelectorAll(".task input")
  inputs.forEach(element => {
    element.addEventListener("focusout", (e) => {
      // console.log("focusout")
      // console.log(element.dataset.task)
      let task = getTaskById(element.dataset.task)
      // console.log("this task")
      // console.log(task)
      // console.log("after")
      task.content = element.value
      render()
    })
  })
}
//Elvis END----------------------------------------------

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
  //Elvis
  addButton.disabled = true; //Disabling for not being able to add empty tasks
  //Elvis end
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
            <button onclick="toggleDone('${list[i].id}')"><i class="fas fa-undo-alt"></i></button>
            <button onclick="deleteTask('${list[i].id}')"><i class="fa fa-trash"></i></button>
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
  return "_" + Math.random().toString(36).substring(2, 9);
}


//local storage part 
if (localStorage.getItem("taskList")) {
  taskList = JSON.parse(localStorage.getItem("taskList")); // change JSON letter to javascript object
  render(); // UI로 보여줘. 
}
// Add an event listener to the window object to handle the 'beforeunload' event //
window.addEventListener("beforeunload", function () { // window객체에 추가된것으로 페이지를 떠나기전에 뭔가 하는 beforeunload 함수이다.  
  // Save the taskList data to localStorage
  localStorage.setItem("taskList", JSON.stringify(taskList)); // javascript object to JSON letter
});


/**
 * @author Elvis
 * Adding eventlisteners and functions for editing Tasks 
 */



/**
 * Returns the task with a given ID
 * @param: id of the Task
 * @returns : Task with given ID
 */
const getTaskById = (id) => {
  return taskList.filter((task) => task.id === id)[0];
}

/**
 * Gets the clickevent e and opens an Inputfield on the clicked Task
 * for editing the value
 * @param {*} e 
 */
const edit = (e) => {
  // console.log("call edit")
  // console.log(e.currentTarget.value)
  let id = e.currentTarget.value
  let clickedTask = document.querySelector(`#${id}`)
  // console.log(focus)
  //pick the span element and the invisible input element
  let selectedSpanValue = clickedTask.querySelector("span").textContent
  let selectedInput = clickedTask.querySelector("input")

  //setting the task name as input value 
  selectedInput.value = selectedSpanValue;
  //Toggeling visibility of the elments
  clickedTask.querySelector("span").classList.toggle("d-none")
  clickedTask.querySelector("input").classList.toggle("d-none")
  //Selecting the inputfield
  selectedInput.focus()
}

/**
 * Adding delete button
 * 
 */
const deleteButton = document.querySelector("#deleteButton")
console.log("call delete")
deleteButton.addEventListener("click", (e) => {
  localStorage.removeItem("taskList")
  taskList = [];
  filteredList = []
  render()
})

/**
 * Mohamed edits here :)
 * 
 * 
 */
const divElement = document.querySelector('.main-background');

let timeoutId;

userInput.addEventListener('input', function() {
  divElement.classList.add('secondary-background');

  clearTimeout(timeoutId);
  timeoutId = setTimeout(function() {
    divElement.classList.remove('secondary-background');
  }, 4000);
});


