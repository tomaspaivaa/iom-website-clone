// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
const sopa = document.getElementById("main-menu-sopa");

// Get the offset position of the navbar
const sticky = sopa.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        sopa.classList.add("sticky")
    } else {
        sopa.classList.remove("sticky");
    }
}

const listHamburg = document.getElementById('list-hamburg');
const openHamburg = document.getElementById('open-hamburg');

openHamburg.addEventListener('click', () => {
    const displayValue = listHamburg.style.display || "none"
    if (displayValue == 'none') {
        listHamburg.style.display = 'flex'
    } else {
        listHamburg.style.display = 'none'
    }
})