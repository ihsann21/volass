document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gallery-display img");
  let currentIndex = 0;

  // Lightbox elementi oluştur
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox-modal");
  lightbox.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <span class="lightbox-prev">&#10094;</span>
    <span class="lightbox-next">&#10095;</span>
    <img class="lightbox-modal-content" src="" alt="">
  `;
  document.body.appendChild(lightbox);

  const modalImg = lightbox.querySelector(".lightbox-modal-content");
  const closeButton = lightbox.querySelector(".lightbox-close");
  const prevButton = lightbox.querySelector(".lightbox-prev");
  const nextButton = lightbox.querySelector(".lightbox-next");

  // Resme tıklanınca lightbox aç
  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      showImage(currentIndex);
      lightbox.style.display = "flex";
      updateButtons(); // Butonları güncelle
    });
  });

  // Seçilen resmi lightbox içinde göster
  function showImage(index) {
    if (index >= 0 && index < images.length) {
      modalImg.src = images[index].src;
      currentIndex = index;
      updateButtons(); // Butonları güncelle
    }
  }

  // Butonları güncelle (Baştaysa sol butonu, sondaysa sağ butonu gizle)
  function updateButtons() {
    prevButton.style.display = currentIndex === 0 ? "none" : "block";
    nextButton.style.display = currentIndex === images.length - 1 ? "none" : "block";
  }

  // Kapat butonuna tıklanınca lightbox'ı kapat
  closeButton.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Önceki resme geç
  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      showImage(currentIndex - 1);
    }
  });

  // Sonraki resme geç (son fotoğraftaysa geçiş yapma)
  nextButton.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
      showImage(currentIndex + 1);
    }
  });

  // ESC tuşuna basınca lightbox'ı kapat
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      lightbox.style.display = "none";
    } else if (event.key === "ArrowLeft" && currentIndex > 0) {
      prevButton.click();
    } else if (event.key === "ArrowRight" && currentIndex < images.length - 1) {
      nextButton.click();
    }
  });

  // Lightbox dışına tıklanınca kapat
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
