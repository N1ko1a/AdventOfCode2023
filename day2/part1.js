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
    const finalePar = new Map();
    let allConditionsPass = true; // Flag to track if all conditions pass
    for (let i = 0; i < par.length; i++) {
      let condition = true; // Flag to track if all conditions pass
      par[i].forEach((element) => {
        parts = element.trim().split(" ");
        console.log(parts);
        let key = parts[1];
        let value = parseInt(parts[0]);
        if (uslov.has(key) && uslov.get(key) < value) {
          allConditionsPass = false; // Set the flag to false if any condition fails
          return; // Exit the loop early
        }
        if (condition == false) {
          allConditionsPass = false;
        }
      });
    }
    console.log("Spolja: ", allConditionsPass);
    if (allConditionsPass === true) {
      let gameId = item.split(":")[0].trim().replace("Game", "");
      if (!isNaN(parseInt(gameId))) {
        sum += parseInt(gameId);
      }
    }
  });
  console.log(sum);
});
