const fs = require("fs");

let text;
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  text = data;

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const leterNumbers = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };
  const finale = [];
  let sum = 0;

  const array = text.split("\n");
  for (let i = 0; i < array.length; i++) {
    const char = array[i].split("");
    let par = "";
    let par1 = "";
    let addNumber = "";
    char.forEach((element) => {
      par1 += element;
      for (let j = 0; j < numbers.length; j++) {
        if (element === numbers[j]) {
          par += numbers[j];
          par1 = "";
        }
      }
      for (let key in leterNumbers) {
        if (par1.includes(leterNumbers[key])) {
          par += key;
          par1 = "";
        }
      }
    });
    addNumber += par[0];
    addNumber += par[par.length - 1];
    finale.push(parseInt(addNumber));
  }
  finale.forEach((element) => {
    if (!isNaN(element)) {
      sum += element;
    }
  });

  console.log(sum);
});
