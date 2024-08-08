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

//   document.addEventListener('DOMContentLoaded', function() {
//    const form = document.querySelector('form');
    
//    form.addEventListener('submit', function(event) {
//        const name = document.getElementById('name').value;
//        const email = document.getElementById('email').value;
//        const subject = document.getElementById('subject').value;
//        const message = document.getElementById('message').value;
        
//        if (!name || !email || !subject || !message) {
//            alert('Please fill in all fields.');
//            event.preventDefault();
//        }
//    });
//});

});
