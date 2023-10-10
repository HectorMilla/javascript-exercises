const reverseString = function (sentence) {
  let sentenceArray = sentence.split("");
  let reversedArray = [];
  let reversedSentence = "";
  for (i = 0; i < sentenceArray.length; i++) {
    reversedArray.unshift(sentenceArray[i]);
    reversedSentence = reversedArray.join("");
  }
  return reversedSentence;
};

// Do not edit below this line
module.exports = reverseString;
