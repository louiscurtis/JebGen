function setCreatureContent() {
  const starts = [
    "Spiny",
    "Slimy",
    "Cankerous",
    "Plated",
    "Grand",
    "Booty",
    "Scrunchy",
  ];

  const mids = ["Green", "Wispy", "Flat-Headed", "Zonked", "Greased"];

  const ends = [
    "Hound",
    "Were-Rat",
    "Warblebeast",
    "Antelope",
    "Gazer",
    "Tube-ram",
    "Log",
    "Centipede",
    "Beetle",
    "Turtle",
    "Vultschpeckler",
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

  document.getElementById("creature").innerHTML = newPhrase;
}
