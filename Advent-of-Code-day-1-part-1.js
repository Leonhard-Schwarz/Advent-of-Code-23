const input = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

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
