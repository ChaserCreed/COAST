// Generate Random Stars
function createStars() {
    const starContainer = document.querySelector('.stars');
    const numStars = 100; // Number of stars

    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div');
        star.classList.add('star');

        // Random positioning
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        // Random size
        let size = Math.random() * 2.5 + 1; // Between 1px and 3.5px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Random brightness
        let brightness = Math.random() * 0.5 + 0.5; // Between 0.5 and 1 opacity
        star.style.opacity = brightness;

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        starContainer.appendChild(star);
    }
}

createStars();

// Parallax Effect with Glowing Trail
window.addEventListener('scroll', function() {
    let scrollValue = window.scrollY;

    document.querySelectorAll('.star').forEach((star, index) => {
        let speed = (index % 3) + 1; // Different speeds for depth effect
        star.style.transform = `translateY(${scrollValue * (0.2 * speed)}px)`;
        star.style.opacity = Math.max(0.3, 1 - scrollValue * 0.0005); // Fade out slightly on scroll
    });
});