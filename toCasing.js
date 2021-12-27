function toCasing(inputString) {
  const shouldLower = document.getElementById("lowercase-toggle").checked;

  const shouldAngry = document.getElementById("angry-toggle").checked;

  const shouldPig = document.getElementById("pig-toggle").checked;

  if (shouldLower) {
    return inputString[0].toLowerCase() + inputString.substring(1);
  } else if (shouldAngry) {
    return inputString.toUpperCase() + "!";
  } else if (shouldPig) {
    let vowels = ["a", "e", "i", "o", "u"];
    let newStr = "";

    if (vowels.indexOf(inputString[0]) > -1) {
      newStr = inputString + "way";
      return newStr;
    } else {
      let firstMatch = inputString.match(/[aeiou]/g) || 0;
      let vowel = inputString.indexOf(firstMatch[0]);
      newStr =
        inputString.substring(vowel) + inputString.substring(0, vowel) + "ay";
      return newStr;
    }
  } else {
    return inputString[0].toUpperCase() + inputString.substring(1);
  }
}
