// * Soal 2
const isR18Plus = (age) => {
  const key = 18 < age;
  return new Promise((resolve, reject) => {
    if (key) {
      resolve("anda sudah dewasa");
    } else {
      reject("anda masih dibawah umur");
    }
  });
};
const printR18Plus = async () => {
  const underAge = await isR18Plus(10)
    .then((key) => key)
    .catch((key) => key);
  const properAge = await isR18Plus(19);

  console.log(underAge);
  console.log(properAge);
};

printR18Plus();
