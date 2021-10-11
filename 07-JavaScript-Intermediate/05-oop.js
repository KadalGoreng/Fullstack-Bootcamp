// * Soal 1
// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// menampilkan object dari fun1 yang berisi fun1 dan fun2, lalu fun2 kosong hanya keluar fun2 {}
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// beda
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
// berbeda karena arrow funtion tidak memiliki this yang mengarah ke dirinya dirinya sendiri (global)
const obj = {
  fun1: function () {
    console.log("fun1", this);
  },
  fun2: () => {
    console.log("fun2", this);
  },
};

obj.fun1();
obj.fun2();

// * Soal 2
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
// cara untuk membatasi akses langsung ke properti atau method dari sebuah objek.
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
// sebuah teknik untuk menyembunyikan detail tertentu dari sebuah objek/method dan hanya menampilkan fungsionalitas atau fitur penting dari objek tersebut.
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
// sebuah proses dimana sebuah class mewariskan property dan methodnya ke class lain atau childnya.
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
// kemampuan dari suatu objek untuk memiliki banyak bentuk
