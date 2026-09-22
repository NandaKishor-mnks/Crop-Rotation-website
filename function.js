document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Auto-select week if passed via URL anchor (e.g., weekly-details.html#week-3)
    const hash = window.location.hash;
    if (hash && hash.startsWith('#week-')) {
        const weekNum = parseInt(hash.replace('#week-', ''));
        if (weekNum >= 1 && weekNum <= 8) {
            switchWeek(weekNum);
        }
    }
});

// Function to switch active week tab
function switchWeek(weekNum) {
    // Hide all week content blocks
    const contents = document.querySelectorAll('.week-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Reset button active classes
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Activate target content block
    const targetContent = document.getElementById(`week-${weekNum}`);
    if (targetContent) {
        targetContent.classList.add('active');
    }

    // Activate target button
    const targetButton = document.getElementById(`btn-${weekNum}`);
    if (targetButton) {
        targetButton.classList.add('active');
    }
}