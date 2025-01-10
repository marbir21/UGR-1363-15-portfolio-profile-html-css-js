// Function to toggle the menu and change the icon
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const toggleButton = document.querySelector('.togglemenu');
  
    // Toggle the menu visibility
    menu.classList.toggle('show');
  
    // Change the button content based on menu state
    if (menu.classList.contains('show')) {
      toggleButton.innerHTML = '&times;'; // Cancel (close) symbol
    } else {
      toggleButton.innerHTML = '&equiv;'; // Hamburger menu
    }
  }
  