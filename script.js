// script.js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let currentImage = null;

document.getElementById('upload').onchange = function (e) {
    const img = new Image();
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        currentImage = img;
    };
    img.src = URL.createObjectURL(e.target.files[0]);
};

function applyFilter(filter) {
    if (currentImage) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.filter = filter;
        ctx.drawImage(currentImage, 0, 0);
        ctx.filter = 'none';
    }
}

function downloadImage() {
    const link = document.createElement('a');
    link.download = 'edited-image.png';
    link.href = canvas.toDataURL();
    link.click();
}
