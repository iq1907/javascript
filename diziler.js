var marka = ["Opel","Toyota","Mazda","Renault","Bmw"];
var model = new Array("Corsa","Yaris","Cx-3","Clio");

console.log(marka);
console.log(marka[2]);
console.log(model);
console.log(model[2]); 

model[0] = "Astra";

console.log(model);

var auris =["Toyota","Auris",42,true];

auris.push("kırmızı"); // sona eleman ekler
auris.unshift("50");   // başa eleman ekler
auris.pop();           // sondaki elemanı siler
auris.shift();         // baştaki elemanı siler

console.log(auris);

for (let index = 0; index < marka.length; index++) {

    const element = marka[index];

    console.log(element);
    
}

if (marka.indexOf("Renaultt") > -1) 
    console.log("Bulundu");
else 
    console.log("Bulunamadı");

var a = model.map((e)=> e + "xxx");

console.log(a);

model.forEach((element,i) => {

    console.log(i + ' ' + element);
    
});    




