let currentIndex = 0; // Global index to track the current image
let galleryItems = []; // Array to store gallery data

// Function to open the modal with the selected image
function openModal(index) {
    currentIndex = index;
    const work = galleryItems[index];

    const modalImage = document.getElementById('modal-image');
    modalImage.src = work.imageUrl;
    modalImage.style.transform = 'scale(1)'; // Reset zoom

    document.getElementById('modal-title').textContent = work.title;
    document.getElementById('modal-name').textContent = `by ${work.studentName}`;
    document.getElementById('modal-description').textContent = work.description;
    document.getElementById('modal-process-doc').href = work.processDocLink;

    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
}

// Event listeners for Next/Previous buttons
document.getElementById('next-button').addEventListener('click', () => navigateGallery(1));
document.getElementById('prev-button').addEventListener('click', () => navigateGallery(-1));

// Function to navigate the gallery (next/previous)
function navigateGallery(direction) {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < galleryItems.length) {
        openModal(newIndex);
    }
}

// Functions to zoom in and out
let zoomLevel = 1;
document.getElementById('zoom-in-button').addEventListener('click', () => zoomImage(1.1));
document.getElementById('zoom-out-button').addEventListener('click', () => zoomImage(0.9));


function zoomImage(factor) {
    zoomLevel *= factor;
    const modalImage = document.getElementById('modal-image');
    modalImage.style.transform = `scale(${zoomLevel})`;
    modalImage.style.overflow = 'hidden';
}
