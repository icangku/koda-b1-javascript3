const displayNamePromise = (name, seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === "Jane" || name === "John" || name === "Ed") {
        resolve(`${name}`);
      } else {
        reject(`${name} that name unrecognizable`);
      }
    }, seconds);
  });
};

displayNamePromise("Jane", 500)
  .then((msg) => {
    console.log(msg);
    return displayNamePromise("John", 1500);
  })
  .then((msg) => {
    console.log(msg);
    return displayNamePromise("Ed", 2000);
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

async function getName() {
  try {
    const disJane = await displayNamePromise("Jane", 500);
    console.log(disJane);
    const disJohn = await displayNamePromise("John", 1500);
    console.log(disJohn);
    const disEd = await displayNamePromise("Ed", 2000);
    console.log(disEd);
  } catch (error) {
    console.error(error);
  }
}
getName();
