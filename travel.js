
window.onload = function () {
    alert("Welcome to Explore the World! Start planning your dream vacation.");
};


let currentImageIndex = 0;
const images = [
    "r1.jpeg",
    "r2.jpeg",
    "r3.jpeg",
    "r4.jpeg"
];

function changeImage() {
    const imageElement = document.getElementById("slideshow");
    if (imageElement) { 
        imageElement.src = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length; 
    } else {
        console.error("Slideshow element not found!");
    }
}

setInterval(changeImage, 3000);
