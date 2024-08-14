const images = document.querySelectorAll('.gallery .image');
const popup = document.querySelector('.popup');
const largeImage = document.querySelector('.large-image');
const imageName = document.querySelector('.image-name');
const closeBtn = document.querySelector('.close-btn');

let currentIndex = 0;

// Function to update the popup with the current image
function updatePopup() {
    const image = images[currentIndex];
    largeImage.src = image.src;
    imageName.textContent = `Image ${currentIndex + 1}`;
}

// Function to show the popup
function showPopup(index) {
    currentIndex = index;
    updatePopup();
    popup.style.display = 'flex';
}

// Function to close the popup
function closePopup() {
    popup.style.display = 'none';
}

// Function to show the next image
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updatePopup();
}

// Function to show the previous image
function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updatePopup();
}

// Event listeners for each image in the gallery
images.forEach((image, index) => {
    image.addEventListener('click', () => showPopup(index));
});

// Event listeners for closing and keyboard navigation
closeBtn.addEventListener('click', closePopup);

document.addEventListener('keydown', (event) => {
    if (popup.style.display === 'flex') {
        if (event.key === 'ArrowRight') {
            showNextImage();
        } else if (event.key === 'ArrowLeft') {
            showPrevImage();
        } else if (event.key === 'Escape') {
            closePopup();
        }
    }
});

// Close the popup if clicking outside the image or on the close button
popup.addEventListener('click', (e) => {
    if (e.target === popup || e.target === closeBtn) {
        closePopup();
    }
});
