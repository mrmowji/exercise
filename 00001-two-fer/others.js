const twoFer = name => {
  let title = name;
  if (title === undefined) {
    title = "you";
  }
  return `One for ${title}, one for me.`;
};

export default twoFer;
