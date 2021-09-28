/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
console.log("Reference Error: muncul saat menggunakan variabel yang belum dideklarasikan");
console.log("Range Error: muncul saat memberikan angka diluar batas yang bisa dijangkau");
console.log("Type Error: muncul saat menggunakan fungsi yang tidak sesuai dengan tipe data tersebut");
console.log("Syntax Error: muncul saat salah pada penulisan sintak javascript");

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
// kode error
// masuk kedalam kategori reference error
// termasuk reference error karena variabel dipanggil lebih dulu baru di deklarasikan
console.log(salaryWithVar);
console.log(salaryWithConst);

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
