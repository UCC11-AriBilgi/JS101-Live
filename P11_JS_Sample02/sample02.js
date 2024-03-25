function kareAl() {
    var sayi = parseInt(document.getElementById("sayi").value); // ekrandaki texti okuyup sayiya cevirme

    var karesi = sayi * sayi;

    document.getElementById("sonuc").innerHTML = karesi;
}