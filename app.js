const toggleButton = document.getElementsByClassName('toggle-button')[0]
const links = document.getElementsByClassName('links')[0]

toggleButton.addEventListener('click', () => {
    links.classList.toggle('active')
})

window.onscroll = function () { myFunction() };

const navbar = document.getElementById("navbar");

function myFunction() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
    }
    else {
        navbar.classList.remove("sticky")
    }
}