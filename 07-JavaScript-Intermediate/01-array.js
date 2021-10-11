// * Soal 1
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse(input) {
  let newArr = [];
  for (let index = 0; index <= input.length - 1; index++) {
    newArr.unshift(input[index]);
  }
  return newArr;
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

// * Soal 2
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
  //   let rata = arr.reduce((a, b) => a + b) / arr.length;
  //   return rata
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  let rata = total / arr.length;
  let lebihBesar = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > rata) {
      lebihBesar++;
    }
  }
  return lebihBesar;
}

console.log(getAverage(arr1));
console.log(getAverage(arr2));

// * Soal 3
const arr = [[10], [9, 7, 1], [2, 8]];

function searchInArray(arr, num) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      array.push(arr[i][j]);
    }
  }
  for (let x = 0; x < array.length; x++) {
    if (num === array[x]) {
      return array.indexOf(array[x]);
    }
  }
  return null;
}

console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));
