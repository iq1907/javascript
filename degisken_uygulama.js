var ad = "", soyad = "", ders = "", not1 = 0, not2 = 0, not3 = 0.00 , basari = "";

ad = prompt("Adınız?");
soyad = prompt("Soyadınız?");
ders = prompt("Sınav Girişi Dersi?");
not1 = prompt("Adınız 1. not?");
not2 = prompt("Adınız 2. not?");

not3 = (Number(not1) + Number(not2)) / 2;

if (not3 >= 45) {
    basari = "Geçtiniz."
}
else{
    basari = "Kaldınız!"
}

alert(not3);
console.log( ad + " " + soyad + " " + ders + " Ortalama puanı :" + not3 + " Başarı Durumu:" + basari);