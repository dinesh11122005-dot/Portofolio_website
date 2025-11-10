/**
 * Simple JavaScript function to show a specific section and hide the others.
 * This simulates a multi-page feel without actually changing pages (SPA concept).
 */
function showSection(sectionId) {
    // Get all content sections
    const sections = document.querySelectorAll('.content-section');

    // Loop through all sections and hide them
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Get the target section and show it
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
}

// Initial call to ensure only the 'about' section is visible when the page loads
// Note: This is redundant if 'hidden' is correctly applied in HTML, but good for robustness.
document.addEventListener('DOMContentLoaded', () => {
    // Check which section should be visible initially (defaulting to 'about')
    const initialSection = 'about';
    showSection(initialSection);
});
