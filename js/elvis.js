// Consts and Variables----------------------------------------------------------------

// Navbar Right Side
const rightOffcanvasToggler = document.querySelector("#rightOffcanvasToggler");
const rightOffcanvas = document.querySelector("#tdNavbar");
const leftCollapseToggler = document.querySelector("#leftCollapseToggler");
const homeItem = document.querySelector("#homeItem")

//Navbar left Side
const leftSideBar = document.querySelector("#leftSideBar");
const rightNavbarBreakpoint = 992;
let largeScreen = window.innerWidth >= rightNavbarBreakpoint ? true : false;

//Main Section
// const submitBtnE = document.querySelector("#submitButton");
// submitBtnE.disabled = true;
const taskInput = document.querySelector("#taskInput");

//Event Listeners----------------------------------------------------------

/**
 * Changes the collapse Directon of the left Sidebar
 * depending on a Breakpoint while resizing window
 */
window.addEventListener("resize", (e) => {
  console.log(window.innerWidth)
  if (window.innerWidth < rightNavbarBreakpoint && largeScreen) {
    leftSideBar.classList.remove("collapse-horizontal");
    largeScreen = false;
  } else if (!largeScreen && window.innerWidth >= rightNavbarBreakpoint) {
    leftSideBar.classList.add("collapse-horizontal");
    largeScreen = true;
  }
})