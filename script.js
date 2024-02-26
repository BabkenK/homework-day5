document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener('mouseover', function() {
            // Change color on hover
            this.style.backgroundColor = '#2ecc71';
        });

        item.addEventListener('mouseout', function() {
            // Change back to original color on mouseout
            this.style.backgroundColor = '#3498db';
        });
    });
});