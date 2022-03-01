
const ad = document.querySelector("#ad");
const soyad = document.querySelector("#soyad");
const yas = document.querySelector("#yas");
const maas = document.querySelector("#maas");
const departmant = document.querySelector("#departmant");
const ekle = document.querySelector("#ekle");
const liste = document.querySelector("#liste");
ekle.onclick = function () {

    let tAd = document.createElement("td");
    let tSoyad = document.createElement("td");
    let tYas = document.createElement("td");
    let tMaas = document.createElement("td");
    let tDepartmant = document.createElement("td");

    tAd.textContent = ad.value;
    tSoyad.textContent = soyad.value;
    tYas.textContent = yas.value;
    tMaas.textContent = maas.value;
    tDepartmant.textContent = departmant.value;

    let tr = document.createElement("tr");

    tr.appendChild(tAd);
    tr.appendChild(tSoyad);
    tr.appendChild(tYas);
    tr.appendChild(tMaas);
    tr.appendChild(tDepartmant);

    liste.appendChild(tr);

    ad.value = "";
    soyad.value = "";
    yas.value = "";
    maas.value = "";
    departmant.value = "";

    ad.focus();
}