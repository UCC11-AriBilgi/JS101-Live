// Sayfa yüklendiğinde menu div 'inin kapalı gelmesini gostermek için
var menuDurumu = 0;

function menuDegistir() {
    var menuObj = document.getElementById("menu");

    if (menuDurumu == 0) {
        // menüm kapalı durumdadır..bunu acmak lazım

        menuObj.style.display = "block";
        menuDurumu = 1;

    }
    else {
        // menüm acıksa
        // menüyü kapatalım.
        menuObj.style.display = "none";
        menuDurumu = 0;
    }
}