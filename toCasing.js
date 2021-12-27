function toCasing(inputString) {
  const shouldLower = document.getElementById("casing-toggle").checked;

  const shouldAngry = document.getElementById("angry-toggle").checked;

  if (shouldLower) {
    return inputString[0].toLowerCase() + inputString.substring(1);
  } else if (shouldAngry) {
    return inputString.toUpperCase() + "!";
  } else {
    return inputString[0].toUpperCase() + inputString.substring(1);
  }
}
