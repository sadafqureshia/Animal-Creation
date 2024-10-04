// script.js

// Add event listener to donate button
document.querySelector('#donate button').addEventListener('click', () => {
    // Add donate functionality here
    console.log('Donate button clicked');
});

// Add event listener to contact links
document.querySelectorAll('#contact a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Add contact functionality here
        console.log('Contact link clicked');
    });
});

// Add event listener to navigation links
document.querySelectorAll('header nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Add navigation functionality here
        console.log('Navigation link clicked');
    });
});