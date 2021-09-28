/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
console.log("ada 2, yaitu global scope dan lokal scope");
console.log(
  "lokal scope adalah variabel yang dideklarasikan di dalam fungsi, variabel lokal hanya dapat diakses dari dalam fungsi tersebut.\nglobal scope adalah variabel yang dibuat di luar fungsi, dan variabel ini dapat digunakan dimana saja."
);

let global = "global"; //variabel global
function namee(params) {
  let lokal = "lokal"; //variabel lokal
}

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// Hasilnya adalah "Mariah", bukan nilai dari variable name karena disitu memanggil funsi yang terdapat parameter name dan argumen yang diinputkan saat melakukan console adalah "Mariah Carey"
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
