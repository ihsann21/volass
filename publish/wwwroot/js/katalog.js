const pageImages = [
    "/katalog/katalog1.jpg",
    "/katalog/katalog2.jpg",
    "/katalog/katalog3.jpg",
    "/katalog/katalog4.jpg",
    "/katalog/katalog5.jpg",
    "/katalog/katalog6.jpg",
    "/katalog/katalog7.jpg",
    "/katalog/katalog8.jpg",
    "/katalog/katalog9.jpg",
    "/katalog/katalog10.jpg",
    "/katalog/katalog11.jpg",
    "/katalog/katalog12.jpg",
    "/katalog/katalog13.jpg",
    "/katalog/katalog14.jpg",
    "/katalog/katalog15.jpg",
    "/katalog/katalog16.jpg",
    "/katalog/katalog17.jpg",
    "/katalog/katalog18.jpg",
    "/katalog/katalog19.jpg",
    "/katalog/katalog20.jpg",
    "/katalog/katalog21.jpg",
    "/katalog/katalog22.jpg",
    "/katalog/katalog23.jpg",
    "/katalog/katalog24.jpg",
    "/katalog/katalog25.jpg",
    "/katalog/katalog26.jpg",
    "/katalog/katalog27.jpg",
    "/katalog/katalog28.jpg"



    // ... bu şekilde 84 sayfayı doldurun
  ];

  // Get the book container element
  const bookContainer = document.getElementById("bookContainer");

  // Sayfaları saklayacağımız dizi
  let pages = [];

  // Kaçıncı sayfayı açtığımızı takip eden değişken
  // (book logic: her 2 görsel 1 "çift sayfa" gibi davranabilir,
  //  ama burada basitçe tek tek flip efekti yapacağız.)
  let currentPage = 0; 

  // Sayfaları oluşturup ekrana yerleştiriyoruz
  function createPages() {
    // Check if bookContainer exists before trying to use it
    if (!bookContainer) {
      console.error("Error: #bookContainer element not found in the document");
      return; // Exit the function early if bookContainer doesn't exist
    }

    pageImages.forEach((imgSrc, index) => {
      const pageDiv = document.createElement("div");
      pageDiv.classList.add("page");
      pageDiv.style.backgroundImage = `url('${imgSrc}')`;
      
      // Sayfaların dönüş sırasını (zIndex) ayarlayalım.
      // En üstte daima en son eklenen sayfa olsun isterseniz:
      pageDiv.style.zIndex = pageImages.length - index;

      bookContainer.appendChild(pageDiv);
      pages.push(pageDiv);
    });
  }

  // Only create pages if we have a book container
  if (bookContainer) {
    // Başta sayfaları oluşturalım
    createPages();
  }

  // Mevcut sayfaya kadar olanları "flipped" yapacağız
  function updatePages() {
    pages.forEach((page, index) => {
      // currentPage'den küçük index'e sahip sayfalar çevrilmiş olsun
      if (index < currentPage) {
        page.classList.add("flipped");
      } else {
        page.classList.remove("flipped");
      }
    });
  }

  // Get the navigation button elements
  const prevButton = document.getElementById("prevPage");
  const nextButton = document.getElementById("nextPage");

  // Only add event listeners if elements exist
  if (prevButton) {
    // Önceki butonu
    prevButton.addEventListener("click", function(){
      if (currentPage > 0) {
        currentPage--;
        updatePages();
      }
    });
  }

  if (nextButton) {
    // Sonraki butonu
    nextButton.addEventListener("click", function(){
      if (currentPage < pages.length) {
        currentPage++;
        updatePages();
      }
    });
  }