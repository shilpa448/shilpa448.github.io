
 // Get references to elements
  const gallery = document.querySelector('.igallery');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const closeButton = document.getElementById('close');

  // Add event listener to each image
  gallery.addEventListener('click', e => {
    if (e.target.classList.contains('hover-shadow')) {
      const imageSrc = e.target.src;
      lightboxImage.src = imageSrc;
      lightbox.style.display = 'flex';
    }
  });

  // Close lightbox when close button is clicked
  closeButton.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
  
