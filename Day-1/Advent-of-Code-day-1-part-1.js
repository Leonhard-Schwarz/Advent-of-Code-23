import fs from "fs";

const input = fs.readFileSync("./Day-1/Input.txt", "utf-8").split("\r\n");

function calculateCalibrationvValue(input) {
  let combinedNumbers = [];
  let finalNumber = 0;

  for (let i = 0; i < input.length; i++) {
    const regex = /\d/;
    let number1 = input[i].match(regex);
    let number2 = input[i].split("").reverse().join("").match(regex);
    combinedNumbers.push(parseInt(number1 + number2));
    finalNumber += combinedNumbers[i];
  }

  return finalNumber;
}

console.log(calculateCalibrationvValue(input));
