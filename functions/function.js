/* -------------------------------------------------------------------------- */
/*                     //!  ********** FUNCTIONS *********                    */
/* -------------------------------------------------------------------------- */
//? Bir fonksiyon belirli bir görevi(tek bir görev için tek fonksiyon olması daha iyidir) gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir,
//? test etmesi kolaydır

//! * ----------------------------Declaration---------------------------------- */
// 1-Fonksiyonlar   function anahtar kelimesi ile tanımlanır
// 2-Function kelimesini ardından fonsiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.
//? fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.

function topla() {
  let sum = 5 + 7;
  console.log(sum);
}

topla();

function carp() {
  let mult = 69 * 56;
  return mult;
}
console.log(carp());

// iki sayinin carpimi ve farkini bulan prog

function cikart() {
  let sub = 69 - 56;
  return sub;
}
let result = carp() + cikart();
console.log(`69 ve 56 sayilarini carpiminin ve farkinin toplami ${result}`);
// paremetre alan fonksiyonlar

// Fonksiyonu bir defa yazıp defalarca kullanmak için  parametre alırlar
// Eğer bir fonksiyon parametre alıyorsa , o aldığı parametre,değeriyle ve  özellikleriyle gelir.

//?   function fonksiyonadi(parametre1,parametre2, ...){   Parametre yada argüman denir
//      yapılacak işlemler
//   return ile oluşturlan sonucu geri gönder
//
// ***************************************************
function toplam(num1, num2) {
  console.log(`1. sayi ${num1} 2. sayi ${num2}`);
  let sum = num1 + num2;
  return sum;
}
console.log(toplam(23, 56));
// console.log(toplam(8, 578));
// console.log(toplam(2452693, 147856));

// adi soyadi berarber yazan prog

// function bilgi(adi, soyadi) {
//   //   let birlestir = adi + " " + soyadi;
//   return `${adi} ${soyadi}`;
// }
// console.log(bilgi("gülsen", "alkan"));

// girilen ismi 5 defa yazan program

function isim(adi) {
  for (i = 1; i <= 5; i++) {
    console.log(adi);
  }
}
isim("gulsen");

function bilgi(adi = " ...", soyadi = "...") {
  //   let birlestir = adi + " " + soyadi;
  return `${adi} ${soyadi}`;
}
console.log(bilgi("gülsen"));

// kullanicidan fonksiyona iki deger gönderilecek 1. degeri 2. deger kadar carpan program

function findpower(num1, num2) {
  return num2 ** num1;
}
console.log(findpower(5, 7));

// kullanicidan alinan dogum tarihine göre yas hesapla

function hesap(ad, seviye, puan) {
  if (seviye == "VE") {
    puan += puan * 0.1;
  } else if (seviye == "ME") {
    puan += puan * 0.2;
  } else if (seviye == "HR") {
    puan += puan * 0.3;
  } else if (seviye == "EX") {
    puan += puan * 0.5;
  }
  return `Adi: ${ad}, Seviye: ${seviye}, Puani: ${puan}`;
}
console.log(hesap("ali", "ve", 30));

let yil = new Date();
let buyil = yil.getFullYear();
let dogumTarihi = +prompt("dogum tarihi giriniz");

function islem(dogum) {
  return buyil - dogum;
}

islem(dogumTarihi);
let sonuc = 73 - islem(dogumTarihi);
console.log("ortalama", sonuc, "ömrünüz var");
if (sonuc <= 10) {
  console.log("aglama degmez hayat bu göz yaslarina");
} else if (sonuc > 10 || sonuc <= 20) {
  console.log("Hadi yine iyisin sen isini bilirsin");
} else {
  console.log("uzun ince bir yoldasin");
}
