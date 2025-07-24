module.exports = function reverse(number) {
  const convertNumber = number.toString();
  let reverseNumber = '';

  for (let i = 0; i < convertNumber.length; i += 1) {
    reverseNumber = `${convertNumber[i]}${reverseNumber}`;
  }

  return parseInt(reverseNumber, 10);
};
