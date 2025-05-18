document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM tamamen yüklendi.");

    const scrollButton = document.getElementById("scrollButton");
    const targetSection = document.getElementById("bolumFaaliyetler");

    if (!scrollButton || !targetSection) {
        console.error("Buton veya hedef bölüm bulunamadı.");
        return;
    }

    scrollButton.addEventListener("click", function () {
        console.log("Butona tıklandı, hedefe gidiliyor...");

        // Örneğin üst menü 120 px ise aşağıdaki offset'i 120 yapın:
        const offset = 120;

        // Hedef bölümün sayfa içindeki pozisyonu
        const elementPosition = targetSection.getBoundingClientRect().top;

        // Sayfanın en üstten scroll miktarı
        const pageScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Nihai scroll hedefi: bulduğumuz konumdan offset çıkarıyoruz
        const scrollTarget = elementPosition + pageScroll - offset;

        // Pürüzsüz (smooth) kaydırma
        window.scrollTo({
            top: scrollTarget,
            behavior: "smooth"
        });
    });
});
