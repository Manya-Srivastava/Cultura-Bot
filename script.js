let currentIndex = 0;

function moveLeft() {
    const gallery = document.querySelector('.image-gallery');
    const images = document.querySelectorAll('.image-gallery img');
    if (currentIndex > 0) {
        currentIndex--;
        gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

function moveRight() {
    const gallery = document.querySelector('.image-gallery');
    const images = document.querySelectorAll('.image-gallery img');
    if (currentIndex < images.length - 1) {
        currentIndex++;
        gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}
