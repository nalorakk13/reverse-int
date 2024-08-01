module.exports = function reverse(number) {
    const convertNumber = number.toString();
    let reverseNumber = '';

    for (let i = 0; i < convertNumber.length; i++) {
        reverseNumber = `${convertNumber[i]}${reverseNumber}`
    }

    return parseInt(reverseNumber);
}
