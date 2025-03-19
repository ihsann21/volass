function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburgerIcon = document.querySelector('.hamburger-menu');

  // Menü görünümü togglela
  mobileMenu.classList.toggle('open');

  // Hamburger ikonunu da togglela (3 çizgi → X animasyonu)
  hamburgerIcon.classList.toggle('open');

}
function toggleAccordion(menuId) {
  // Tüm alt menü <ul> öğelerini bul
  const allSubMenus = document.querySelectorAll('.mobile-menu ul ul');
  // Tıklanan alt menü öğesini bul
  const subMenu = document.getElementById(menuId);
  // Açık mı kapalı mı olduğunu anla
  const isOpen = (subMenu.style.display === 'block');

  // Önce hepsini kapat
  allSubMenus.forEach(menu => {
    menu.style.display = 'none';
  });

  // Eğer tıklanan zaten açıksa kapalı bırak,
  // değilse aç
  if (!isOpen) {
    subMenu.style.display = 'block';
  }
}