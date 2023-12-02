import fs from "fs";

const input = fs.readFileSync("./Day-1/Input.txt", "utf-8").split("\r\n");

function calculateCalibrationvValue(input) {
  let combinedNumbers = [];
  let number1Array = [];
  let number2Array = [];
  let finalNumber = 0;

  const numberLookUpTable = {
    nine: "9",
    eight: "8",
    seven: "7",
    six: "6",
    five: "5",
    four: "4",
    three: "3",
    two: "2",
    one: "1",
  };

  for (let i = 0; i < input.length; i++) {
    const regex = /one|two|three|four|five|six|seven|eight|nine|\d/;
    const regexReversed = /eno|owt|eerht|ruof|evif|xis|neves|thgie|enin|\d/;
    let number1 = input[i].match(regex);
    let number2 = input[i].split("").reverse().join("").match(regexReversed);
    number1Array.push(number1[0]);
    number2Array.push(number2[0].split("").reverse().join(""));

    for (let key in numberLookUpTable) {
      if (key == number1Array[i]) {
        number1Array[i] = numberLookUpTable[key];
      }
    }
    for (let key in numberLookUpTable) {
      if (key == number2Array[i]) {
        number2Array[i] = numberLookUpTable[key];
      }
    }
    combinedNumbers.push(parseInt(number1Array[i] + number2Array[i]));
    finalNumber += combinedNumbers[i];
  }

  return finalNumber;
}

console.log(calculateCalibrationvValue(input));
