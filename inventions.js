function setInventionContent() {
  const starts = [
    "Automated",
    "Auxiliary",
    "Improved",
    "Ogdenized",
    "Superior",
    "Tricornial",
    "Vaporized",
    "Versatile",
    "Wangsational",
    "Poly-Dynamic",
  ];

  const mids = [
    "Chunky",
    "Electric",
    "Grand",
    "Jolly",
    "Pet",
    "Rump-fed",
    "Spinning",
  ];

  const ends = [
    "Acidifier",
    "Door-Knocker",
    "Jimmy-Rustler",
    "Mercurializer",
    "Poisonator",
    "Pots",
    "Puffsender",
    "Spontaneator",
    "Stick",
    "Wobbler",
    "Aero-Beacon",
  ];

  const hasMid = Math.floor(Math.random() * 2);

  const randFirst = Math.floor(Math.random() * starts.length);

  const randMid = Math.floor(Math.random() * mids.length);

  const randSecond = Math.floor(Math.random() * ends.length);

  let newPhrase = toUpper(starts[randFirst]);

  if (hasMid === 0) {
    newPhrase = newPhrase + " " + toUpper(mids[randMid]);
  }

  const phraseEnd = toUpper(ends[randSecond]);

  newPhrase = newPhrase + " " + phraseEnd;

  const inventionDiv = document.getElementById("invention");
  inventionDiv.innerHTML = newPhrase;
}
