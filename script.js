const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

document.getElementById('upload').onchange = function (e) {
    const img = new Image();
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
    };
    img.src = URL.createObjectURL(e.target.files[0]);
};

function applyFilter(type) {
    ctx.filter = type;
    ctx.drawImage(canvas, 0, 0);
}

function downloadImage() {
    const link = document.createElement('a');
    link.download = 'edited-image.png';
    link.href = canvas.toDataURL();
    link.click();
}
