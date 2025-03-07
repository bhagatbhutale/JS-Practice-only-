var isLongPressedName = function (name, typed) {
  let i = 0, j = 0;

  while (j< typed.length) {
    if (i < name.length && name[i] === typed[j]) {
      i++; 
    } else if (j > 0 && typed[j] === typed[j - 1]) {
      j++;
      continue;
    } else {
      return false; 
    }
    j++; 
  }

  return i === name.length;
};
