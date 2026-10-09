const numbers = [3, 10, 18, 20];

function findIndex(array, func) {
  for (let i = 0; i <= array.length; i++) {
    if (func(array[i])) {
      return i;
    }
  }
}

function checkAge(age) {
  return age === 20;
}

const index = findIndex(numbers, checkAge);
console.log(`Manual: ${index}`);

const indexBuiltIn = numbers.findIndex(checkAge);
console.log(`Built In : ${indexBuiltIn}`);
