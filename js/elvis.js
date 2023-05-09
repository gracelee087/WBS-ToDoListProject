
// Consts and Variables
const rightOffcanvasToggler = document.querySelector("#rightOffcanvasToggler");
const leftCollapseToggler = document.querySelector("#leftCollapseToggler");
const leftSideBar = document.querySelector("#leftSideBar");
let largeScreen = true;

//Event Listeners
leftCollapseToggler.addEventListener("click", (e) => {
  console.log(e.target);
});

window.addEventListener("resize", (e) => {
  console.log(window.innerWidth)
  if (window.innerWidth < 992 && largeScreen) {
    leftSideBar.classList.remove("collapse-horizontal");
    largeScreen = false;
  } else if (!largeScreen && window.innerWidth >= 992) {
    leftSideBar.classList.add("collapse-horizontal");
    largeScreen = true;
  }


})
