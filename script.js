// Toggle dark/light mode
document.getElementById('modeToggle').onclick = function() {
    document.body.classList.toggle('dark-mode');
};

// Handle star rating
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.onclick = function() {
        const value = this.getAttribute('data-value');
        stars.forEach(s => {
            s.classList.toggle('filled', s.getAttribute('data-value') <= value);
        });
    };
});

// Handle review submission
document.getElementById('submitReview').onclick = function() {
    const name = document.getElementById('nameInput').value;
    const review = document.getElementById('reviewInput').value;
    const rating = Array.from(stars).filter(star => star.classList.contains('filled')).length;

    if (name && review && rating) {
        const reviewSection = document.getElementById('reviewSection');
        const reviewEntry = document.createElement('div');
        reviewEntry.classList.add('border', 'rounded', 'p-2', 'mt-2', 'bg-gray-200', 'dark:bg-gray-700');
        reviewEntry.innerHTML = `<strong>${name} (${rating} stars)</strong><p>${review}</p>`;
        reviewSection.appendChild(reviewEntry);

        // Clear input fields
        document.getElementById('nameInput').value = '';
        document.getElementById('reviewInput').value = '';
        stars.forEach(s => s.classList.remove('filled'));
    } else {
        alert('Please fill in all fields and give a rating!');
    }
};
