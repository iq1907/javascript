var now = 2018;

var models = new Array("Toyota","Mazda","Mercedes","Opel");
var years = new Array("2015","2012","2016","2014");

console.log("*** Uygulama Start ***");

models.push("Bmw");
years.push("2000");

for (let index = 0; index < models.length; index++) {
    console.log(models[index] + " " + years[index] +" model ve " + (now - Number(years[index]) ) + " yaşında bir araç" );
}
