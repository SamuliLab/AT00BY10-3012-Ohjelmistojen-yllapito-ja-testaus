// main.js

const mylib = require("./mylib");

function main() {
  console.log("Summa:", mylib.add(5, 3));
  console.log("Erotus:", mylib.subtract(5, 3));
  console.log("Kertolasku:", mylib.multiply(5, 3));
  console.log("Jakolasku:", mylib.divide(6, 3));
}

main();
