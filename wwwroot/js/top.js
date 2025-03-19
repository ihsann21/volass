document.addEventListener("DOMContentLoaded", function () {
    var backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            backToTop.style.display = "block"; // Aşağı kayınca buton görünsün
        } else {
            backToTop.style.display = "none"; // En üste gelince gizlensin
        }
    });

    backToTop.addEventListener("click", function () {
        if ("scrollBehavior" in document.documentElement.style) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            document.documentElement.scrollTop = 0; // Chrome, Firefox, Edge
            document.body.scrollTop = 0; // Safari
        }
    });
});
