"use strict";

// Promise is a JavaScript Object for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer vs Consumer
// result:

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work()
  console.log("doing something...");
  setTimeout(() => {
    // resolve("Nine");
    reject(new Error("No network"));
  }, 2000);
  console.log("finish...");
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));
