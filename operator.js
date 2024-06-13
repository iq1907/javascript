//aritmetik operatorler****

var sayi1 = 11;
var sayi2 = 5;
var sayi3 = 3;

console.log(sayi1 + sayi2);
console.log(sayi1 - sayi2);
console.log(sayi1 * sayi2);
console.log(sayi1 / sayi2);
console.log(sayi1 / sayi2);
console.log(sayi1 * sayi2 + sayi3);
console.log(sayi1 * (sayi2 + sayi3));

sayi1++; //i = i + 1;
console.log(sayi1);
sayi1--; // i = i - 1;
console.log(sayi1); 

// sayısal operatorler***

var sonuc = sayi1 > sayi2;
console.log(sonuc);
console.log(sayi1<sayi2);
console.log(sayi1<=sayi2);
console.log(sayi1>=sayi2);
console.log(sayi1>=sayi2);
console.log(sayi1!=sayi2);
console.log(sayi1=="11");
console.log(sayi1==="11"); // tip kontrolu de yapar 

//mantıksal operatorler*** &&-And ||-Or !-Not

var x = 10, y = 5, z = 5;

console.log("Mantıksal Operatorler");

console.log( (x>y) && (x>z));
console.log( (x>y) || (y>z));
console.log( (x>y) != (x>z));

