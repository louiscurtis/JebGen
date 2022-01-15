const nouns = [
  "Banana",
  "Nuts",
  "Turd",
  "Muffin",
  "Yogurt",
  "Potato",
  "Pottery",
];

function randNoun() {
  const randIndex = Math.floor(Math.random() * nouns.length);
  return nouns[randIndex];
}
