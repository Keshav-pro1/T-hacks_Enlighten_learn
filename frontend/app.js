// Smooth Scrolling for Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const darkModeBtn = document.querySelector('.dark-mode-btn');
    
    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkModeBtn.innerHTML = '🌞'; // Change icon to sun
        } else {
            darkModeBtn.innerHTML = '🌙'; // Change icon to moon
        }
    });
});

// Check if the browser supports notifications
if ("Notification" in window) {
    // Request permission from the user
    Notification.requestPermission().then(function(permission) {
        // If the user accepts, show a notification
        if (permission === "granted") {
            showNotification();
        }
    });
}

// Function to show the notification
function showNotification() {
    const notification = new Notification("Welcome!", {
        body: "Thanks for visiting our site!",
        icon: "https://via.placeholder.com/100x100.png?text=Welcome"
    });

    // Optional: add a click event to the notification
    notification.onclick = function(event) {
        window.focus(); // Focus the browser window when notification is clicked
    };
}
