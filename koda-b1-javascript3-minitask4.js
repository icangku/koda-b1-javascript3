const url = "https://jsonplaceholder.typicode.com/users";

const generateListOfArray = (arr, type) => {
  let str = `List of Email of ${type}:\n`;
  arr.forEach((item) => {
    str += `${item}\n`;
  });
  console.log(str);
};

const toLowerCaseString = (string) => {
  const HURUF_BESAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const huruf_kecil = "abcdefghijklmnopqrstuvwxyz";
  let hasil = "";

  for (let i = 0; i < string.length; i++) {
    const karakterSekarang = string[i];

    let indexKetemu = -1;
    for (let j = 0; j < HURUF_BESAR.length; j++) {
      if (HURUF_BESAR[j] === karakterSekarang) {
        indexKetemu = j;
        break;
      }
    }

    if (indexKetemu !== -1) {
      hasil += huruf_kecil[indexKetemu];
    } else {
      hasil += karakterSekarang;
    }
  }

  return hasil;
};

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const builtInArrayEmail = [];
    const nonBuiltInArrayEmail = [];
    data.forEach((item) => {
      const emailItem = item.email;
      builtInArrayEmail.push(emailItem.toLowerCase());
      nonBuiltInArrayEmail.push(toLowerCaseString(emailItem));
    });
    console.log("Then Catch\n");
    generateListOfArray(builtInArrayEmail, "BuiltIn ");
    generateListOfArray(nonBuiltInArrayEmail, "Non BuiltIn");
    console.log(`=======================================================`);
  })
  .catch((err) => {
    console.log(err);
  });

async function genEmailList() {
  try {
    const callUrl = await fetch(url);
    const res = await callUrl.json();

    const builtInArrayEmail = [];
    const nonBuiltInArrayEmail = [];
    res.forEach((item) => {
      const emailItem = item.email;
      builtInArrayEmail.push(emailItem.toLowerCase());
      nonBuiltInArrayEmail.push(toLowerCaseString(emailItem));
    });
    console.log("Async-Await\n");
    generateListOfArray(builtInArrayEmail, "BuiltIn ");
    generateListOfArray(nonBuiltInArrayEmail, "Non BuiltIn");
  } catch (err) {
    console.log(err);
  }
}
genEmailList();
