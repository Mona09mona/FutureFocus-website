// JavaScript for expandable menus and hamburger menu
document.addEventListener('DOMContentLoaded', function () {
    // Handle expandable submenus
    var submenuItems = document.querySelectorAll('.submenu');

    submenuItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            var submenu = item.querySelector('ul');
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Handle hamburger menu toggle
    const hamburger = document.querySelector(".hamburger");
    const mainMenu = document.querySelector(".main-menu");

    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        mainMenu.classList.toggle("active");
    });
});
