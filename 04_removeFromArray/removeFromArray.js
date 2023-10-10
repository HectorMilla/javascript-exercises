const removeFromArray = function (list, ...args) {
  for (i = 0; i < args.length; i++) {
    if (list.includes(args[i])) list.splice(list.indexOf(args[i]), 1);
  }
  console.log(list);
  return list;
};

// Do not edit below this line
module.exports = removeFromArray;
