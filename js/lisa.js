let userInput = document.querySelector(".task-input"); 
let addButton = document.querySelector(".button-add"); 
let tabs = document.querySelectorAll(".tab-type div");
let underLine = document.getElementById("tab-underline");
let taskList = []; 
let selectedMenu = "tab-all";  // initial value
let filteredList = [];



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
            <div class="button-box">
            <button onclick="toggleDone('${list[i].id}')"><i class="fa fa-check"></i></button>
            
            <button onclick="deleteTask('${list[i].id}')"><i class="fa fa-trash"></i></button>


            </div>
        </div>`;
    }
  }

  document.getElementById("task-board").innerHTML = result;
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


