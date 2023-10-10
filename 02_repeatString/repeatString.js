const repeatString = function (string, num) {
  let completedString = "";
  if (num < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < num; i++) {
      completedString += string;
    }
    return completedString;
  }
};

// Do not edit below this line
module.exports = repeatString;
