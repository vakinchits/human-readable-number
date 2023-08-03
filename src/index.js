module.exports = function toReadable(number) {
    let ones = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let decs = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let strNum = number.toString();
    if (strNum.length <= 2 && number <= 19) {
        return ones[number];
    }
    if (strNum.length == 2 && number > 19 && strNum[1] === "0") {
        return decs[Number(strNum[0]) - 2];
    }
    if (strNum.length == 2 && number > 19) {
        return decs[Number(strNum[0]) - 2] + " " + ones[Number(strNum[1])];
    }
    if (strNum.length === 3 && strNum[1] === "0" && strNum[2] === "0") {
        return ones[Number(strNum[0])] + " hundred";
    }
    if (strNum.length === 3 && strNum[1] === "0") {
        return ones[Number(strNum[0])] + " hundred " + ones[Number(strNum[2])];
    }
    if (strNum.length === 3 && strNum[1] === "1") {
        return ones[Number(strNum[0])] + " hundred " + ones[Number(strNum[2]) + 10];
    }
    if (strNum.length === 3 && strNum[2] === "0") {
        return ones[Number(strNum[0])] + " hundred " + decs[Number(strNum[1]) - 2];
    }
    if (strNum.length === 3) {
        return (
            ones[Number(strNum[0])] +
            " hundred " +
            decs[Number(strNum[1]) - 2] +
            " " +
            ones[Number(strNum[2])]
        );
    }
}