document.addEventListener('DOMContentLoaded', function () {
    const lottieContainer = document.getElementById('lottie-container');

    // Use dotlottie-player to render the animation
    const player = document.createElement('dotlottie-player');
    player.setAttribute('src', 'https://lottie.host/820e5e95-f200-4c34-8f64-8b811cad2929/03IsUgtQGg.json');
    player.setAttribute('background', 'transparent');
    player.setAttribute('speed', '1');
    player.setAttribute('style', 'width: 100%; height: 100%;');
    player.setAttribute('loop', '');
    player.setAttribute('autoplay', '')

    // Append the player to the container
    lottieContainer.appendChild(player);
});

