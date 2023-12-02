import fs from "fs";

const input = fs.readFileSync("./Day-2/input.txt", "utf-8").split("\r\n");

function calculateValidIdSum(input) {
  const colorLookUpTable = {
    red: 12,
    green: 13,
    blue: 14,
  };

  return input.reduce((sum, line, index) => {
    const sets = line.split(": ")[1].split("; ");
    const isValid = sets.every((set) =>
      set.split(", ").every((pull) => {
        const [count, color] = pull.split(" ");
        return colorLookUpTable[color] >= parseInt(count, 10);
      })
    );
    return sum + (isValid ? index + 1 : 0);
  }, 0);
}

console.log(calculateValidIdSum(input));
