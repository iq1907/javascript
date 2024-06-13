var araba0 = {
  marka: "Mercedes",
  model: "A1",
  renk: "Beyaz",
  yil: 2020,
  otomatik: false,
};

var araba1 = new Object();
araba1.marka = "Toyota";
araba1.model = "Corolla";
araba1.renk = "Siyah";
araba1.yil = 2012;
araba1.otomatik = false;

var araba2 = new Object();
araba2.marka = "Bmw";
araba2.model = "i20";
araba2.renk = "Mavi";
araba2.yil = 2000;
araba2.otomatik = true;

//console.log(araba0);
//console.log(araba1);
//console.log(araba2);

var arabalar = [araba0, araba1];

arabalar.push(araba2);

var arabalar2 = [
  {
    marka: "Mercedes",
    model: "A1",
    renk: "Beyaz",
    yil: 2020,
    otomatik: false,
  },
  {
    marka: "Opel",
    model: "Corsa",
    renk: "Siyah",
    yil: 2024,
    otomatik: true,
  },
];

//console.log(arabalar);

for (let index = 0; index < arabalar.length; index++) {
  console.log(arabalar[index]);
}

for (const iterator of arabalar2) {
  console.log("-> " + JSON.stringify(iterator));
}


var personel = {
  Ad: "İsmail",
  Soyad: "Kaplan",
  Cinsiyet: "Erkek",
  Diller: "ingilizce,almanca",
  Hobiler: "sinema,spor,kitap okumak",
  Cocuklar: ["melis", "ali"],
};

console.log("Personel Dil Sayısı: " + personel.Diller.split(",").length);

var hobiler = personel.Hobiler.split(",");

for (let index = 0; index < hobiler.length; index++) {
  console.log(hobiler[index]);
}


//class tanımlama
//1-yöntem
function FPersonel() { 
  this.Ad = "";
  this.Soyad = "";
}

var fpers =  new FPersonel();
//fpers.Ad = "Melis";
//fpers.Soyad = "Kaplan";

console.log(fpers);

//2. yöntem
class Product {

  Id = 0;
  Name = "";
  Stock= 0;

  constructor(id,name,stock) {
    this.Id = id;
    this.Name =name;
    this.Stock = stock;
  }  
  
}

var product = new Product(1,"karpuz",5);
var product2 = new Product(2,"elma",15);
var product3 = new Product(3,"nar",25);

var products = new Array();

products.push(product);
products.push(product2);
products.push(product3);

for (const p of products) {
 
  console.log(`${p.Id} ${p.Name} ${p.Stock}`);
}




