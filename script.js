// Menyeleksi elemen gambar Gunung Gede
const gunungGedeImg = document.querySelector('img[src="gunungGede.jpg"]');

// Menambahkan event listener untuk memperbesar gambar saat di-klik
gunungGedeImg.addEventListener('click', function() {
  gunungGedeImg.style.width = '100%';
});

// Menyeleksi elemen gambar Gunung Kencana
const gunungKencanaImg = document.querySelector('img[src="gunungKencana.jpg"]');

// Menambahkan event listener untuk memperbesar gambar saat di-klik
gunungKencanaImg.addEventListener('click', function() {
  gunungKencanaImg.style.width = '100%';
});
