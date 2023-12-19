
// Function to open the lightbox modal with the clicked image
function openModal(imageUrl) {
    const modalImage = document.getElementById('modal-image');
    modalImage.src = imageUrl;
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
}

// Function to close the lightbox modal
function closeModal() {
    const imageModal = bootstrap.Modal.getInstance(document.getElementById('imageModal'));
    imageModal.hide();
}


