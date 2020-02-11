const COLORS_CODE: string[] = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

const colorCode = (colorName: string): number => COLORS_CODE.indexOf(colorName);

const decodedValue = ([colorName1, colorName2]: string[]): number => {
  return colorCode(colorName1) * 10 + colorCode(colorName2);
};

export default decodedValue;
