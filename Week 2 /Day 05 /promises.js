const myPromise = new Promise((resolve, reject) => {
  const success = true;
  success ? resolve("Promise resolved!") : reject("Promise rejected!");
});

myPromise
  .then(msg => console.log(msg))
  .catch(err => console.log(err))
  .finally(() => console.log("Done"));
