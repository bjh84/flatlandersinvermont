document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    window.addEventListener('scroll', () => {
        const scrollPercentage = (window.scrollY / scrollHeight) * 100;
        console.log(scrollPercentage);
        const greyValue = 255 - (scrollPercentage / 100) * 80; // Adjust grey value based on scroll position
        body.style.backgroundColor = `rgb(${greyValue}, ${greyValue}, ${greyValue})`;
    });
});

window.onscroll = function() {
    var audio = document.getElementById('audio');
    
    // Get the height of the document and viewport
    var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // Calculate the scroll percentage
    const scrollPercentage = (window.scrollY / scrollHeight) * 100;

    // Use a flag to check if the song has already changed
    if (scrollPercentage < 8.5 && audio.dataset.song !== 'Bach') {
        audio.src = 'Bach.mp3';
        audio.dataset.song = 'Bach'; // Set the flag
        audio.play(); // Play the song
    } 
    
    else if (scrollPercentage > 8.5 && scrollPercentage < 40.2 && audio.dataset.song != 'Blue') {
        audio.src = 'Blue.mp3';
        audio.dataset.song = 'Blue'; // Set the flag
        audio.play(); // Play the song
    }
    
    else if (scrollPercentage >= 40.2 && audio.dataset.song !== 'Five') {
        audio.src = 'Five.mp3';
        audio.dataset.song = 'Five'; // Set the flag
        audio.play(); // Play the song
    }
};

