const COLORS_CODE = [
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

const colorCode = colorName => COLORS_CODE.indexOf(colorName);

const decodedValue = ([colorName1, colorName2]) => {
  return colorCode(colorName1) * 10 + colorCode(colorName2);
};

export default decodedValue;
