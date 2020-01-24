const COLORS = [
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

const decodedValue = input =>
  +input
    .map(i => COLORS.indexOf(i))
    .filter((v, i) => i < 2)
    .join("") || 0;

export default decodedValue;
