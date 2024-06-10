document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    window.addEventListener('scroll', () => {
        const scrollPercentage = (window.scrollY / scrollHeight) * 100;
        const greyValue = 255 - (scrollPercentage / 100) * 80; // Adjust grey value based on scroll position
        body.style.backgroundColor = `rgb(${greyValue}, ${greyValue}, ${greyValue})`;
    });
});
