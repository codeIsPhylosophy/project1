const hiddenNav = document.getElementById('hiddenNav');
const defaultPosition = 450;
const scrollPosition = () => window.scrollY;

window.addEventListener("scroll", () => {
    if(scrollPosition() >= defaultPosition) {
        hiddenNav.style.display = 'flex';
    } else {
        hiddenNav.style.display = 'none';
    }
})
