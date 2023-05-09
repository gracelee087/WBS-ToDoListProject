
// Consts and Variables
// Navbar Items Right Bar
const rightOffcanvasToggler = document.querySelector("#rightOffcanvasToggler");
const rightOffcanvas = document.querySelector("#tdNavbar");
// console.log(rightOffcanvas);
const leftCollapseToggler = document.querySelector("#leftCollapseToggler");
const homeItem = document.querySelector("#homeItem")

//Navbar left Side
const leftSideBar = document.querySelector("#leftSideBar");

const rightNavbarBreakpoint = 992;
let largeScreen = window.innerWidth >= rightNavbarBreakpoint ? true : false;

//Event Listeners
leftCollapseToggler.addEventListener("click", (e) => {
  console.log(e.target);
});

/**
 * Adds 5px margin to the Home button if offcanvas opens for nicer spacing to the search bar
 */
rightOffcanvas.addEventListener("show.bs.offcanvas", (e) => {
  homeItem.classList.add("mt-4");
  alert("show");
})

/**
 * Changes the collapse Directon for depending on a Breakpoint
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
