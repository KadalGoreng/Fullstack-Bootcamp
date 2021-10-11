// * Soal 1
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr) {
  if (arr.length < 1) {
    return 0;
  }
  const nilai = arr[0];
  return nilai + sumOfArray(arr.slice(1));
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

// * Soal 2
const avg1 = sumOfArray(arr1) / arr1.length;
const avg2 = sumOfArray(arr2) / arr2.length;
function countAboveAvg(arr, average) {
  if (arr.length < 1) {
    return 0;
  }
  return (arr[0] > average) + countAboveAvg(arr.slice(1), average);
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

// * Soal 3
const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, num) {
  if (arr.length == 0) {
    return "angka tidak ditemukan";
  }
  if (arr[arr.length - 1] === num) {
    return `angka ditemukan pada index: ${arr.indexOf(num)}`;
  }
  return searchInArray(arr.slice(0, -1), num);
}

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));

// * Soal 4
function trianglePattern(x, y) {
  let pattern = "";
  if (x === 0) {
    return 0;
  }
  for (let index = 0; index < y; index++) {
    if (index < x - 1) {
      pattern += " ";
    } else {
      pattern += String.fromCharCode(64 + (y - x + (index - x) + 2));
    }
  }
  console.log(pattern);
  trianglePattern(x - 1, y);
}

trianglePattern(5, 5);
