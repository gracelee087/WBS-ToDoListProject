const submitBtn = document.querySelector(".submitBtn");
const resetBtn = document.querySelector(".resetBtn")
submitBtn.addEventListener("click", (e) =>{
    const notePlaceholder = document.querySelector("ol");
    const input = document.querySelector(".form-control");
    const noteBox = document.createElement("li");
    noteBox.classList.add("list-group-item");
    noteBox.innerText = input.value;
    notePlaceholder.appendChild(noteBox);
    console.log(noteBox);
    input.value = "";

    resetBtn.addEventListener("click", (e) =>{
    
        noteBox.remove();
    });
});
