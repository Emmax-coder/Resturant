// navbar scroll
window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    if(this.window.scrollY > 20){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
});

//scroll up
document.querySelector('#to-top').addEventListener('click',() => {

    let Topinterval = setInterval(() => {

        let ArrowTop = document.body.scrollTop > 0 ? document.body : document.documentElement;

        if(ArrowTop.scrollTop > 0){
            ArrowTop.scrollTop = ArrowTop.scrollTop - 50;
        }
        if(ArrowTop.scrollTop < 1){
            clearInterval(Topinterval)
        }

    },10)    
    }, false);

    function showscroll(){
        let TopButton = document.getElementById('to-top');
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            TopButton.classList.add('show')

        }else{
            TopButton.classList.remove('show')
        }    
    }

    window.onscroll = () => {
        showscroll()
    }

// Navbar toggle
const menuBtn = document.getElementById('menu_btn');
const navlinks = document.getElementById('nav_links');
const menuIcon = document.querySelector('i');

menuBtn.addEventListener('click', (e) => {
    navlinks.classList.toggle('open');

    const isOpen = navlinks.classList.contains('open'); // Fixed typo here
    menuIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');
});

// Select all shopping cart icons
const cartIcons = document.querySelectorAll('.ri-shopping-cart-line');

// Add click event listener to each shopping cart icon
cartIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        const parentMenuItem = icon.closest('.menu_item'); // Get the parent menu item

        // Remove any existing message to prevent duplicates
        const existingMessage = parentMenuItem.querySelector('.cart-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Check if the icon is already yellow
        if (icon.style.color === 'yellow') {
            icon.style.color = ''; // Reset icon color to default

            // Create and display the "Removed from cart" message
            const message = document.createElement('span');
            message.textContent = 'Removed from cart';
            message.classList.add('cart-message'); // Add a class to identify the message
            message.style.color = 'red';
            message.style.fontSize = '0.9rem';
            message.style.marginTop = '10px';
            message.style.display = 'block';
            message.style.textAlign = 'center';

            // Append the message to the parent menu item
            parentMenuItem.appendChild(message);

            // Remove the message after 2 seconds
            setTimeout(() => {
                message.remove();
            }, 2000);
        } else {
            icon.style.color = 'yellow'; // Change icon color to yellow

            // Create and display the "Added to cart" message
            const message = document.createElement('span');
            message.textContent = 'Added to cart';
            message.classList.add('cart-message'); // Add a class to identify the message
            message.style.color = 'green';
            message.style.fontSize = '0.9rem';
            message.style.marginTop = '10px';
            message.style.display = 'block';
            message.style.textAlign = 'center';

            // Append the message to the parent menu item
            parentMenuItem.appendChild(message);

            // Remove the message after 2 seconds
            setTimeout(() => {
                message.remove();
            }, 2000);
        }
    });
});

// Select all heart icons
const heartIcons = document.querySelectorAll('.ri-heart-line');

// Add click event listener to each heart icon
heartIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        // Toggle the color of the heart icon
        if (icon.style.color === 'pink') {
            icon.style.color = ''; // Reset to default color
        } else {
            icon.style.color = 'pink'; // Change to pink
        }
    });

    // Select all heart icons
const heartIcons = document.querySelectorAll('.ri-heart-line');

// Add click event listener to each heart icon
heartIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        const parentMenuItem = icon.closest('.menu_item'); // Get the parent menu item

        // Remove any existing message to prevent duplicates
        const existingMessage = parentMenuItem.querySelector('.heart-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Check if the icon is already pink
        if (icon.style.color === 'pink') {
            icon.style.color = ''; // Reset icon color to default

            // Create and display the "Removed from favourites" message
            const message = document.createElement('span');
            message.textContent = 'Removed from favourites';
            message.classList.add('heart-message'); // Add a class to identify the message
            message.style.color = 'red';
            message.style.fontSize = '0.9rem';
            message.style.marginTop = '10px';
            message.style.display = 'block';
            message.style.textAlign = 'center';

            // Append the message to the parent menu item
            parentMenuItem.appendChild(message);

            // Remove the message after 2 seconds
            setTimeout(() => {
                message.remove();
            }, 2000);
        } else {
            icon.style.color = 'pink'; // Change icon color to pink

            // Create and display the "Added to favourites" message
            const message = document.createElement('span');
            message.textContent = 'Added to favourites';
            message.classList.add('heart-message'); // Add a class to identify the message
            message.style.color = 'green';
            message.style.fontSize = '0.9rem';
            message.style.marginTop = '10px';
            message.style.display = 'block';
            message.style.textAlign = 'center';

            // Append the message to the parent menu item
            parentMenuItem.appendChild(message);

            // Remove the message after 2 seconds
            setTimeout(() => {
                message.remove();
            }, 2000);
        }
    });
});

});

