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
            showNotification();
            showNotification();
        }
    });
}

// Alert 1
// Function to show the notification
function showNotification() {
    const notification = new Notification("Alert!!", {
        body: "Ac's are Damaged in Campus 1, Repair Them As soon As Possible.",
        icon: "https://via.placeholder.com/100x100.png?text=Welcome"
    });

    // Optional: add a click event to the notification
    notification.onclick = function(event) {
        window.focus(); // Focus the browser window when notification is clicked
    };
}

// Alert 2
function showNotification() {
    const notification = new Notification("Alert!!", {
        body: "Time table has been changed for CSE and ECE 2nd year Batch.",
        icon: "https://via.placeholder.com/100x100.png?text=Welcome"
    });

    // Optional: add a click event to the notification
    notification.onclick = function(event) {
        window.focus(); // Focus the browser window when notification is clicked
    };
}


// Alert 3

function showNotification() {
    const notification = new Notification("Alert!!", {
        body: "Farewell has been schedule for 25th December.",
        icon: "https://via.placeholder.com/100x100.png?text=Welcome"
    });

    // Optional: add a click event to the notification
    notification.onclick = function(event) {
        window.focus(); // Focus the browser window when notification is clicked
    };
}


