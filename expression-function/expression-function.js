//!                             EXPRESSION FUNCTION                           */
/* -------------------------------------------------------------------------- */

//! İsimsiz fonksiyondur
//! Bir değişkene atanan bir fonksyiondur. Bu nedenle bir dönüş değeri olmalıdır.
//! Parametre göndermek için değişken adını yazıp parantez içinde parametreler veriyoruz.
// const toplam = function (num, num1) {
//   return num + num1;
// };
// document.write("islemin sonucu  :", toplam(45, 78));

// const deger = function (sayi) {
//   if (sayi % 2 == 0) {
//     console.log(`cift sayidir`);
//   } else {
//     console.log(`tek sayidir`);
//   }
//   return sayi;
// };

// deger(30);

const sirala = function (a, b, c) {
  let buyuk = a;
  if (b >= buyuk) buyuk = b;
  if (c >= buyuk) buyuk = c;

  return buyuk;
};
console.log(sirala(8, 9, 20));
