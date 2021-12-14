"use strict";

console.log("1");
setTimeout(() => console.log("2"), 3000);
console.log("3");

// 비동기적 콜백
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log("async callback"), 2000);

// 동기적 콜백
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));
