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
const submitBtnE = document.querySelector("#submitButton");
submitBtnE.disabled = true;
const taskInput = document.querySelector("#taskInput");


//Event Listeners----------------------------------------------------------

/**
 * Adds 5px margin to the Home button if offcanvas opens. 
 * Gives Nicer spacing to the search bar
 */
rightOffcanvas.addEventListener("show.bs.offcanvas", (e) => {
  homeItem.classList.add("mt-4");
})
/**
 * Removes 5px margin to the Home button when offcanvas closes. 
 */
rightOffcanvas.addEventListener("hide.bs.offcanvas", (e) => {
  homeItem.classList.remove("mt-4");
})


/**
 * Changes the collapse Directon of the left Sidebar
 * depending on a Breakpoint
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

/**
 * Disabling Submit Button 
 */
taskInput.addEventListener("input", (e) => {
  console.log("changing input")
  if (taskInput.value === "") {
    console.log("disabling");

    submitBtnE.disabled = true;
  } else if (submitBtnE.disabled = true) {
    submitBtnE.disabled = false;

  }
});
