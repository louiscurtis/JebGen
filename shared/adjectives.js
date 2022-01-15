const adjectives = [
  "Green",
  "Brown",
  "Ugly",
  "Wispy",
  "Grand",
  "Small",
  "Tiny",
];

function randAdjective() {
  const randIndex = Math.floor(Math.random() * adjectives.length);
  return adjectives[randIndex];
}
