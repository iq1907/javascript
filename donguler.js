for (let index = 0; index < 100; index=index + 10) {
    console.log("for " + index);
}

var i = 0;
while (i<100) {
    console.log("while " + i);
    i = i + 10;
}

var aylar = ["ocak","şubat","mart"];
for (const key in aylar) {
    console.log(key + " " +aylar[key]);
}

for (const iterator of aylar) {
    console.log(iterator);
}

var userName = "ismail";
var password = "123";

while (true) {
    var user = prompt("Adını Giriniz!");
    var pass = prompt("Şifre Giriniz!");

    console.log(user + ' ' + pass);


    if ((userName==user && password == pass) || (user==null && pass == null)) {
        break;
    }
}