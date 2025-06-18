const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");
const galleryImages = document.querySelectorAll(".img-gallery img");

let currentIndex = 0;

// Open lightbox with selected image
function openFullImg(index) {
  currentIndex = index;
  fullImg.src = galleryImages[currentIndex].src;
  fullImgBox.style.display = "flex";
}

// Close lightbox
function closeFullImg() {
  fullImgBox.style.display = "none";
}

// Navigate to next/previous image
function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = galleryImages.length - 1;
  } else if (currentIndex >= galleryImages.length) {
    currentIndex = 0;
  }
  fullImg.src = galleryImages[currentIndex].src;
}

// Add click events to each gallery image
galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => openFullImg(index));
});

// Optional: Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (fullImgBox.style.display === "flex") {
    if (e.key === "ArrowRight") changeImage(1);
    if (e.key === "ArrowLeft") changeImage(-1);
    if (e.key === "Escape") closeFullImg();
  }
});