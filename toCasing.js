function toCasing(inputString) {
  const shouldLower = document.getElementById("casing-toggle").checked;

  if (shouldLower) {
    return inputString[0].toLowerCase() + inputString.substring(1);
  } else {
    return inputString[0].toUpperCase() + inputString.substring(1);
  }
}
