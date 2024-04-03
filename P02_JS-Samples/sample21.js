"use strict";
// Yazılan JS kodlarının ,Javascript standartları dışına çıkmasını engeller ve kodun katı kurallar çerçevesi içinde yazılması gerektiğini bildiren bir direktif. Yani JS kurallarının katı bir şekilde uygulanacağını bildirir. Mesela kod içersinde "use strict" kullanıyorsam tanımsız bir şekilde değişgen kullanımına izin vermiyor.

var slayt = document.getElementsByClassName("slayt");
var slaytsayisi = slayt.length;
var slaytNo = 0; // slaytların sıra numarası
var i = 0;

slaytgoster(slaytNo);

function slaytgoster(slaytNumarasi) {

    if (slaytNumarasi >= slaytsayisi) {
        slaytNo = 0;
    }

    if (slaytNumarasi < 0) {
        slaytNo = slaytsayisi - 1;
    }

    for (i = 0; i < slaytsayisi; i++) {
        slayt[i].style.display = "none"; /*Görüntüden kaldıyorum*/
    }

    slayt[slaytNo].style.display = "block"; /* Görünür duruma getiriyorum */
}

function oncekislayt() {
    slaytNo--;
    slaytgoster(slaytNo);
}

function sonrakislayt() {
    slaytNo++;
    slaytgoster(slaytNo);
}