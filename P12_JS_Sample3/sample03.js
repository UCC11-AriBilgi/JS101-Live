function sayiAl() {
    var sayi1 = parseInt(document.getElementById("sayi1").value);

    var sayi2 = parseInt(document.getElementById("sayi2").value);

    var toplam = sayi1 + sayi2;
    var toplam1 = sayi1 + " " + sayi2;

    document.getElementById("sonuc1").innerHTML = toplam;
    document.getElementById("sonuc2").innerHTML = toplam1;
}