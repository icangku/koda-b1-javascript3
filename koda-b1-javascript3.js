const numbers = [3, 10, 18, 20];

function findIndex(array, func) {
  for (let i = 0; i <= array.length; i++) {
    if (func(array[i], i, array)) {
      return i;
    }
  }
}

function checkAge(age) {
  return age === 3;
}

const index = findIndex(numbers, checkAge);
console.log(index);
