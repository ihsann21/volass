// Sayıların artması için bir fonksiyon
function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
      const target = +counter.getAttribute('data-target'); // Hedef değeri al
      let current = 0;

      const increment = target / 500; // Artış miktarını belirle (hız ayarı)
      
      const updateCounter = () => {
          current += increment;
          if (current < target) {
              counter.textContent = Math.floor(current) + "+"; // Artı işaretini ekledik
              requestAnimationFrame(updateCounter); // Animasyonu devam ettir
          } else {
              counter.textContent = target + "+"; // Hedef değere ulaşıldı ve artı işareti ekledik
          }
      };

      updateCounter();
  });
}

// Intersection Observer ile animasyonu tetikle
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect(); // Animasyon sadece bir kez çalışır
      }
  });
});

// Bölümü gözlemle
const section = document.querySelector('.sayilarla-section');
observer.observe(section);
