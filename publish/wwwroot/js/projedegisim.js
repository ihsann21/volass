  // Sekme butonlarını seç
  const btnDevamEden     = document.getElementById('sekmeDevamEden');
  const btnTamamlanan    = document.getElementById('sekmeTamamlanan');
  const btnGelistirilen  = document.getElementById('sekmeGelistirilen');

  // Proje listesi divlerini seç
  const listeDevamEden   = document.getElementById('devamEden');
  const listeTamamlanan  = document.getElementById('tamamlanan');
  const listeGelistirilen= document.getElementById('gelistirilen');

  // Tüm sekme butonları ve liste referanslarını bir arada tutmak için (döngüsel yaklaşım mümkün)
  const sekmeler = [
    { btn: btnDevamEden,    liste: listeDevamEden },
    { btn: btnTamamlanan,   liste: listeTamamlanan },
    { btn: btnGelistirilen, liste: listeGelistirilen }
  ];

  // Ortak fonksiyon: hangi sekmeye tıklanırsa, önce hepsini gizle, sonra sadece tıklananı aç
  function sekmeAc(secilecek) {
    // Bütün proje listelerini gizle, bütün sekmelerin .aktif sınıfını kaldır
    sekmeler.forEach(item => {
      item.liste.classList.add('gizle'); 
      item.btn.classList.remove('aktif'); 
    });

    // Sadece tıklanmış (secilecek) sekmenin listesini göster, butonunu aktif yap
    secilecek.liste.classList.remove('gizle');
    secilecek.btn.classList.add('aktif');
  }

  // Butonlara tıklama dinleyicilerini ekle
  btnDevamEden.addEventListener('click', () => {
    sekmeAc(sekmeler[0]); // Devam Eden
  });

  btnTamamlanan.addEventListener('click', () => {
    sekmeAc(sekmeler[1]); // Tamamlanan
  });

  btnGelistirilen.addEventListener('click', () => {
    sekmeAc(sekmeler[2]); // Geliştirilen
  });
