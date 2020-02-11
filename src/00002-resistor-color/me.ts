const COLORS: string[] = [
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

const colorCode = (colorName: string): number => COLORS.indexOf(colorName);

export default { colorCode, COLORS };
