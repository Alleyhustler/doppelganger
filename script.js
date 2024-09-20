document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bg-video');
    const videoPage = document.getElementById('videoPage');
    const imagePage = document.getElementById('imagePage');

    // Autoplay with sound
    video.muted = false;
    video.play();

    // When the video ends, transition to the image page
    video.addEventListener('ended', function() {
        videoPage.style.display = 'none';  // Hide the video page
        imagePage.style.display = 'flex';  // Display the second page with image background
    });
});
