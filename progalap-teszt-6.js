let array1 = [3, 5, 7, 8, 12, 15, 19];
let array2 = [13, 4, 3, 9, 7, 11, 22, 5, 19];
let arrayUnio = [];
let i = 0;
let j = 0;
let k = 0;

for (i = 0; i < array1.length; i++) {
  arrayUnio[k] = array1[i];
  k++;
}

for (j = 0; j < array2.length; j++) {
  i = 0;
  while (i < array1.length && array1[i] !== array2[j]) {
    i++;
  }
  if (i === array1.length) {
    arrayUnio[k] = array2[j];
    k++;
  }
}

console.log(arrayUnio);
