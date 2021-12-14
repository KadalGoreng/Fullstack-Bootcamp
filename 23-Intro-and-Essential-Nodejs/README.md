### Tugas 1

1. Mohon jelaskan apa itu Node.js? Apa perbedannya dengan JavaScript? <br>
   Node JS merupakan runtime environment dari javascript yang bersifat open source dan cross platform. Runtime ini menjalankan code javascript di luar dari browser dan menggunakan v8 engine dan biasanya digunakan untuk server side script atau back end.
2. Mohon jelaskan arsitektur dari Node.js?
   - Single Thread: javascript memiliki konsep single thread yang berarti satu task dalam suatu tumpukan.
   - Event Loop: semua request yang masuk akan diproses oleh event loop untuk dieksekusi.
   - Event Queue: menyimpan request sesuai urutan masuk untuk kemudian diproses oleh Event Loop satu per satu.
   - Server Side Scripting: menjalankan javascript pada server (back end)
3. Ape perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js?
   - Built in Module: merupakan module default siap pakai dari node js.
   - External module: merupakan module yang didapat dari suatu komunitas dan siap pakai.
   - Custom module: module yang dibuat sendiri.
4. Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js?
   - Built-in Module: Assert, http, https
   - External Module: Sequelize
   - Custom Module: exports.kali = function (a, b) {
     return a \* b;
     }
