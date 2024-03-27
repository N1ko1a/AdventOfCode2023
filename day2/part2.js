const fs = require("fs");
const { isUndefined } = require("util");
const uslov = new Map([
  ["red", 12],
  ["green", 13],
  ["blue", 14],
]);
let text;
let sum = 0;
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  text = data.split("\n");
  text.forEach((item) => {
    const colonIndex = item.indexOf(":");
    let newText = item.slice(colonIndex + 2).split(";");
    let par = newText.map((round) => round.trim().split(","));
    let parts;
    const finalPar = new Map([
      ["red", 0],
      ["green", 0],
      ["blue", 0],
    ]);
    let parsum = 1;
    for (let i = 0; i < par.length; i++) {
      par[i].forEach((element) => {
        parts = element.trim().split(" ");
        let key = parts[1];
        let value = parseInt(parts[0]);
        if (finalPar.has(key) && finalPar.get(key) < value) {
          finalPar.set(key, value);
        }
      });
    }
    finalPar.forEach((element) => {
      parsum *= element;
    });
    sum += parsum;
  });

  console.log(sum);
});
