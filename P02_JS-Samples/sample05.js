function degistir() {
    var element = document.getElementsByClassName("yazi"); // dokumandaki tüm yazi isimli class a sahip olan elementleri öğrendi.

    var index;

    for (index = 0; index < element.length; index++) {
        element[index].style.color = "green";
        element[index].style.fontSize = 20;

    }
}