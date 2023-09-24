let tarihElementi = document.getElementById('tarih');

let arttirButonu = document.getElementById('arttir');
let azaltButonu = document.getElementById('azalt');

let bugun = new Date();

tarihElementi.textContent = bugun.toLocaleDateString();
document.getElementById("metin").value = localStorage.getItem(bugun.toLocaleDateString());

arttirButonu.addEventListener('click', function () {
    localStorage.setItem(bugun.toLocaleDateString(), document.getElementById("metin").value);
    document.getElementById("metin").value = "";

    bugun.setDate(bugun.getDate() + 1);
    tarihElementi.textContent = bugun.toLocaleDateString();

    document.getElementById("metin").value = localStorage.getItem(bugun.toLocaleDateString());

});

azaltButonu.addEventListener('click', function () {
    localStorage.setItem(bugun.toLocaleDateString(), document.getElementById("metin").value);
    document.getElementById("metin").value = "";

    bugun.setDate(bugun.getDate() - 1);
    tarihElementi.textContent = bugun.toLocaleDateString();

    document.getElementById("metin").value = localStorage.getItem(bugun.toLocaleDateString());

});

let notAlani = document.getElementById('metin');
notAlani.addEventListener('input', function () {
    localStorage.setItem(bugun.toLocaleDateString(), document.getElementById("metin").value);
});

var key = false;
function resize() {
    var nbar = document.getElementById('nav');
    var arrow = document.getElementById("arrowid");

    if (key == false) {
        nbar.style.height = '300px';
        arrow.style.transform = 'rotate(-180deg)';
        key = true;
    }
    else if (key == true) {
        nbar.style.height = '50px';
        arrow.style.transform = 'rotate(0deg)';
        key = false;
    }
}