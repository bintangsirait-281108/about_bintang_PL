// Navigasi Slider Foto Galeri
const carouselSlide = document.getElementById('carouselSlide');
const cards = document.querySelectorAll('.card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;

function updateSlide() {
    const size = cards[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

nextBtn.addEventListener('click', () => {
    if (counter >= cards.length - 1) {
        counter = 0; // kembali ke slide awal
    } else {
        counter++;
    }
    updateSlide();
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
        counter = cards.length - 1; // ke slide terakhir
    } else {
        counter--;
    }
    updateSlide();
});

// Otomatis menyesuaikan ukuran saat layar di-resize
window.addEventListener('resize', updateSlide);