const sumAll = function (n1, n2) {
  let sum = 0;
  let min;
  let max;
  if (n1 < 0 || typeof n1 != "number" || n2 < 0 || typeof n2 != "number") {
    return "ERROR";
  } else {
    if (n1 < n2) {
      min = n1;
      max = n2;
    } else {
      min = n2;
      max = n1;
    }
    for (i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
