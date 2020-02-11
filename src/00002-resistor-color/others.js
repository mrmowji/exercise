const colorCodes = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

const colorCode = key => colorCodes[key];
const COLORS = Object.keys(colorCodes);

export default { colorCode, COLORS };
