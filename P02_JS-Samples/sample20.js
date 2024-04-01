function gengoster() {
    var genislik = document.getElementById("tablo").getAttribute("width");
    document.getElementById("kutu1").value = genislik;
}

function genayarla() {
    var genislik = document.getElementById("kutu1").value;
    document.getElementById("tablo").setAttribute("width", genislik);
}

function renkgoster() {
    var renk = document.getElementById("tablo").getAttribute("bgcolor");
    document.getElementById("kutu2").value = renk;

}

function renkayarla1() {
    var renk = document.getElementById("kutu2").value;
    document.getElementById("tablo").setAttribute("bgcolor",renk);
}

function renkayarla2() {
    var renk = document.getElementById("secim").value;
    document.getElementById("tablo").setAttribute("bgcolor", renk);
}

function genazalt() {
    var genislik = parseInt(document.getElementById("tablo").getAttribute("width"));

    genislik = genislik - 25; /* genislik -= 25*/

    document.getElementById("tablo").setAttribute("width", genislik);
}

function genarttir() {
    var genislik = parseInt(document.getElementById("tablo").getAttribute("width"));

    genislik += 25;

    document.getElementById("tablo").setAttribute("width", genislik);
}