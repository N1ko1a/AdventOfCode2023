const fs = require("fs");
let text;

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  text = data;

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const finale = [];
  let sum = 0;

  const array = text.split("\n");
  for (let i = 0; i < array.length; i++) {
    const char = array[i].split("");
    let par = "";
    let addNumber = "";
    char.forEach((element) => {
      for (let j = 0; j < numbers.length; j++) {
        if (element === numbers[j]) {
          par += numbers[j];
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
