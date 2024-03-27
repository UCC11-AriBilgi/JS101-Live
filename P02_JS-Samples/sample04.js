function toplama() {
    var sayi1 = parseInt(document.getElementById("sayi1").value);

    var sayi2 = parseInt(document.getElementById("sayi2").value);

    var toplam = sayi1 + sayi2;

    document.getElementById("sonuc").innerHTML = toplam;
}

function carpma() {
    var sayi1 = parseInt(document.getElementById("sayi1").value);

    var sayi2 = parseInt(document.getElementById("sayi2").value);

    var carpma = sayi1 * sayi2;

    document.getElementById("sonuc").innerHTML = carpma;
}

function cikarma() {
    var sayi1 = parseInt(document.getElementById("sayi1").value);

    var sayi2 = parseInt(document.getElementById("sayi2").value);

    var fark = sayi1 - sayi2;

    document.getElementById("sonuc").innerHTML = fark;
}

function bolme() {
    var sayi1 = parseInt(document.getElementById("sayi1").value);

    var sayi2 = parseInt(document.getElementById("sayi2").value);

    var sonuc = sayi1 / sayi2;

    document.getElementById("sonuc").innerHTML = sonuc;
}