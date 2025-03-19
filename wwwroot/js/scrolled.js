
document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector(".custom-header");

    if (!header) {
        console.log("⚠️ Hata: .custom-header elementi bulunamadı!");
        return;
    }

    console.log("✅ Header bulundu, script çalışıyor!");

    window.addEventListener("scroll", function () {
        console.log("📜 Scroll yapıldı! ScrollY:", window.scrollY);

        if (window.scrollY > 50) { 
            console.log("🎨 Header siyah oldu!");
            header.classList.add("scrolled");
        } else {
            console.log("🔄 Header tekrar transparan oldu!");
            header.classList.remove("scrolled");
        }
    });
});
