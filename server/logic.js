
module.exports = function getWordList(numbers) {
    // 1. recieve message and turn into an array
    let message = Array.from(numbers);

    // 2. turn message into an array of 3 letter arrays
    let firstArray = [];
    message.forEach((digit) => {
      const combo =
        digit === "2"
          ? ["a", "b", "c"]
          : digit === "3"
            ? ["d", "e", "f"]
            : digit === "4"
              ? ["g", "h", "i"]
              : digit === "5"
                ? ["j", "k", "l"]
                : digit === "6"
                  ? ["m", "n", "o"]
                  : digit === "7"
                    ? ["p", "q", "r", "s"]
                    : digit === "8"
                      ? ["t", "u", "v"]
                      : ["w", "x", "y", "z"];
      firstArray.push(combo);
    });

    // 3. declaire the possible combinations array
    let possibleCombinations = firstArray[0];

    // 4 make a loop for the rest of the items in firstArray
    for (let i = 1; i < firstArray.length; i++) {

      // 5. for each item in possibleCombinations, add each letter in firstArray[i]
      let newCombination = [];
      let nextLetters = firstArray[i];

      possibleCombinations.forEach((item) => {
        newCombination.push(item + nextLetters[0]);
        newCombination.push(item + nextLetters[1]);
        newCombination.push(item + nextLetters[2]);
        newCombination.push(item + nextLetters[3]);
      });
      possibleCombinations = newCombination;
    }
    return possibleCombinations;
  }