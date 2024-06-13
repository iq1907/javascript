var yas = prompt("Yaşınızı Giriniz?");

if(Number(yas) >= 18 ) {
    console.log("Ehliyet Alabilirsiniz...");
}
else{
    console.log("Ehliyet Almak için "  + (18 - Number(yas)) + " Yıl Beklemelisiniz...");
}

var ay = prompt("Kaçıncı Ayda Olduğunuz Giriniz");

switch (Number(ay)) {
    case 12:
    case 1:
    case 2:
    console.log("Kış Mevsimindesiniz!")    
    break;

    case 3:
    case 4:
    case 5:
    console.log("İlkbahar Mevsimindesiniz!")    
    break;

    case 6:
    case 7:
    case 8:
    console.log("Yaz Mevsimindesiniz!")    
    break;

    case 9:
    case 10:
    case 11:
    console.log("Sonbahar Mevsimindesiniz!")    
    break;

    default:
        console.log("Yanlış Değer Girdiniz!");
        break;
}