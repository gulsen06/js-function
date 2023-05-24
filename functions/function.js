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

// let yil = new Date();
// let buyil = yil.getFullYear();
// let dogumTarihi = +prompt("dogum tarihi giriniz");

// function islem(dogum) {
//   return buyil - dogum;
// }

// islem(dogumTarihi);
// let sonuc = 73 - islem(dogumTarihi);
// console.log("ortalama", sonuc, "ömrünüz var");
// if (sonuc <= 10) {
//   console.log("aglama degmez hayat bu göz yaslarina");
// } else if (sonuc > 10 || sonuc <= 20) {
//   console.log("Hadi yine iyisin sen isini bilirsin");
// } else {
//   console.log("uzun ince bir yoldasin");
// }

// const basamak = function (adet, satir, sembol) {
//   let yildiz = "";
//   let bosluk = "";
//   for (let i = 0; i < adet; i++) {
//     for (let j = 0; j < satir; j++) {
//       yildiz += sembol;
//     }
//     bosluk += "_";
//     yildiz += `\n`;
//     if (i === adet - 1) break;
//     yildiz += bosluk;
//   }
//   return console.log(yildiz);
// };
// basamak(5, 10, "*");

console.clear();

const calcFahrenheit = (sicaklik) => {
  return (sicaklik * 9) / 5 + 32;
};
console.log(calcFahrenheit(35));

const kelime = "hello World";

const ters = (metin) => {
  let tersifade = "";
  for (let i = metin.length - 1; i >= 0; i--) {
    tersifade += metin[i];
  }
  return tersifade;
};
console.log(ters(kelime));

const string = "selles";
const ifade = (str) => {
  let yeniString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    yeniString += str[i];
    console.log(yeniString);
  }
  return yeniString === string;
};
console.log(ifade(string));

// function böltop(deger) {
//   let bölenlerinTop = 0;
//   for (let i = 1; i <= deger; i++) {
//     deger % i == 0 ? (bölenlerinTop += i) : null;
//   }
//   return bölenlerinTop;
// }
// console.log(böltop(12));

// let radius = +prompt("Yaricap giriniz: ");

// function perArea(radius) {
//   let per = (Math.PI * 2 * radius).toFixed(2);
//   let area = (Math.PI * radius ** 2).toFixed(2);

//   return `Perimeter: ${per}, Area: ${area}`;
// }

// console.log(perArea(radius));

// function istPrime(sayi) {
//   if (sayi < 2) return false;
//   for (let i = 2; i < sayi; i++) {
//     if (sayi % i === 0) return false;
//   }
//   return true;
// }
// console.log(istPrime(9));

// function islem(val1, val2, power) {
//   var result = Math.pow(val1 * val2, power);
//   console.log(result);
// }
// islem(3, 3, 2);
console.clear();
function mükSayi(num) {
  let tpl = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      tpl += i;
    }
    if (tpl == num * 2) {
      console.log("sayi mükemmeldir");
    } else {
      return console.log("sayi mükemmel degildir");
    }
  }
}
mükSayi(28);

function callFortune(job, location, partner, numkids) {
  return `siz ${job} isindede ${location} da calisacaksiniz.${partner} ile yasayacaksiniz ${numkids} tane cocugunuz olacak`;
}
console.log(callFortune("doktor", "almanya", "ayse", "3"));
