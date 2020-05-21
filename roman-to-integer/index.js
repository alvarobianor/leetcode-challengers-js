const resp = "XII";

let romanInInt = (array) => {
  const numberRoman = array.toString();
  if (!numberRoman || numberRoman.length === 0) return 0;
  const convertedValues = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let index = numberRoman.length - 1;
  let result = convertedValues.get(numberRoman[index]);

  while (index > 0) {
    const curr = convertedValues.get(numberRoman[index]);
    const pres = convertedValues.get(numberRoman[index - 1]);

    if (pres < curr) result -= pres;
    if (pres >= curr) result += pres;
    index--;
    console.log(result);
  }

  return result;
};

console.log(romanInInt("XLVIII"));
// console.log(resp.length);
