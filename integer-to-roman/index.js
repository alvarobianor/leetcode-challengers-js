const intToRoman = (number) => {
  const convertedValues = new Map([
    [1, "I"],
    [5, "V"],
    [10, "X"],
    [50, "L"],
    [100, "C"],
    [500, "D"],
    [1000, "M"],
  ]);

  const convertedString = number.toString();

  let index = convertedString.length - 1;
  let expo = 0;
  let arrayUnits = [];

  while (index >= 0) {
    arrayUnits.push(convertedString[index] * 10 ** expo);
    index--;
    expo++;
  }

  let finalResult = "";

  let partial = [];

  for (let index = 0; index < arrayUnits.length; index++) {
    const element = arrayUnits[index];

    let mult = 0;

    if (index === 0) mult = 1;
    else if (index === 1) mult = 10;
    else if (index === 2) mult = 100;
    else mult = 1000;

    if (mult) {
      if (element < 4 * mult) {
        let aux = "";
        for (let i = mult; i <= element; i += mult) {
          aux += convertedValues.get(1 * mult);
        }
        partial.push(aux);
      } else if (element === 4 * mult) {
        partial.push(
          convertedValues.get(1 * mult) + convertedValues.get(5 * mult)
        );
      } else if (element === 5 * mult) {
        partial.push(convertedValues.get(5 * mult));
      } else if (element > 5 * mult && element < 9 * mult) {
        let aux = "";
        for (let i = 5 * mult; i < element; i += mult) {
          aux += convertedValues.get(1 * mult);
        }
        partial.push(convertedValues.get(5 * mult) + aux);
      } else if (element === 9 * mult) {
        partial.push(
          convertedValues.get(1 * mult) + convertedValues.get(10 * mult)
        );
      }
    }
  }
  partial.reverse();
  partial.forEach((item) => {
    if (item !== "") finalResult += item;
  });

  return finalResult;
};
console.log(intToRoman(3089));
