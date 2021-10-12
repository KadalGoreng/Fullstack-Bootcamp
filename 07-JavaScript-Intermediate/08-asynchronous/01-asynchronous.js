// * Soal 1
// 1. Apa itu synchronous?
// proses jalannya program secara sequential , disini yang dimaksud sequential ada berdasarkan antrian ekseskusi program
// 2. Apa itu asynchronous?
// proses jalannya program bisa dilakukan secara bersamaan tanpa harus menunggu proses antrian.
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// bisa
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// menampilkan first log sebanyak 5x dengan nilai 1-5 dan second log sebanyak 5x dengan nilai sama yaitu 6
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
// karena di deklasi menggunakan var yang menjadikan variable tersebut menjadi global, jika menggunakan let maka hasil second log akan sama seperti first log
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
// mengganti varible var dengan let
for (let i = 1; i <= 5; i++) {
  console.log("first log: ", i); // 01 - Pertama
  setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}
