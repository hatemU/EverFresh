let navButton = document.getElementById('navbarDropdown');
let navbarMenu = document.getElementById('navbarMenu');

console.log(navButton)
navButton.addEventListener("click", (event) => {

    if (navbarMenu.style.display === 'none') {
        navbarMenu.style.display = 'block';
      } else {
        navbarMenu.style.display = 'none';
      }
});
document.addEventListener('click', (event) => {
    if (event.target !== navButton) {
        navbarMenu.style.display = 'none';
      }
  });
