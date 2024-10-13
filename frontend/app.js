// Smooth Scrolling for Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal Interaction Example (Optional)
const modalBtn = document.querySelector('.cta-btn.green');
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
    <div class="modal-content">
        <h2>Enroll in Our Courses</h2>
        <p>Submit your details to get started.</p>
        <button class="close-modal">Close</button>
    </div>
`;
document.body.appendChild(modal);

modalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

document.querySelector('.close-modal').addEventListener('click', () => {
    modal.style.display = 'none';
});

// Hide modal on outside click
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
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