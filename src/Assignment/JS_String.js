function correctMistake(line, incorrectWord, toBeReplacedWithChar) {
    // write code here
   const regex = new RegExp(incorrectWord, "g");
  return line.replace(regex, toBeReplacedWithChar);


}