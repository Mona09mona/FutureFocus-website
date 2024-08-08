// JavaScript for expandable menus
document.addEventListener('DOMContentLoaded', function() {
    // Handle expandable menus
    var submenuItems = document.querySelectorAll('.submenu');

    submenuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            // Prevent default behavior only if needed
            // event.preventDefault(); 
            var submenu = item.querySelector('ul');
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        });
    });
});
