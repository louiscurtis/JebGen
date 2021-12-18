function setInventionContent() {
  const starts = [
    "Versatile",
    "Improved",
    "Superior",
    "Tricornial",
    "Wangsational",
    "Ogdenized",
    "Vaporized",
    "Automated",
    "Auxiliary",
  ];

  const mids = ["Spinning", "Rump-fed", "Jolly", "Electric", "Pet"];

  const ends = [
    "Poisonator",
    "Acidifier",
    "Spontaneator",
    "Jimmy-Rustler",
    "Door-Knocker",
    "Stick",
    "Pots",
    "Puffsender",
    "Wobbler",
    "Mercurializer",
  ];

  const hasMid = Math.floor(Math.random() * 2);

  const randFirst = Math.floor(Math.random() * starts.length);

  const randMid = Math.floor(Math.random() * mids.length);

  const randSecond = Math.floor(Math.random() * ends.length);

  let newPhrase = starts[randFirst];

  if (hasMid === 0) {
    newPhrase = newPhrase + " " + mids[randMid];
  }

  const phraseEnd = ends[randSecond];

  newPhrase = newPhrase + " " + phraseEnd;

  const inventionDiv = document.getElementById("invention");
  inventionDiv.innerHTML = newPhrase;
}
