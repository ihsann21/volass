document.addEventListener("DOMContentLoaded", function() {
  const icons = document.querySelectorAll(".icon-tab");
  const contents = document.querySelectorAll(".circle-content");
  let currentTab = 1;
  let maxTabs = icons.length;
  
  // Sekmeyi aktif hale getiren fonksiyon
  function activateTab(tabNumber) {
    // Tüm ikon ve içeriklerden active kaldır
    icons.forEach(icon => icon.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));
    
    // Verilen tab'a sahip ikon ve içerik active olsun
    const targetIcon = document.querySelector(`.icon-tab[data-tab="${tabNumber}"]`);
    const targetContent = document.querySelector(`.circle-content[data-tab="${tabNumber}"]`);
    if(targetIcon) targetIcon.classList.add("active");
    if(targetContent) targetContent.classList.add("active");
    
    currentTab = tabNumber;
  }

  // İkonlara tıklama dinleyicisi
  icons.forEach(icon => {
    icon.addEventListener("click", () => {
      const tab = icon.getAttribute("data-tab");
      activateTab(tab);
      // Otomatik döngüyü resetliyoruz ki manuel tıklamada tekrar 5 sn'den saysın
      clearInterval(autoRotate);
      autoRotate = setInterval(nextTab, 5000);
    });
  });

  // Otomatik sıradaki sekmeye geçme
  function nextTab() {
    let next = currentTab + 1;
    if(next > maxTabs) next = 1;
    activateTab(next);
  }

  // Sayfa ilk yüklendiğinde 5 sn'de bir sekme değiştiren döngü
  let autoRotate = setInterval(nextTab, 4000);
});
