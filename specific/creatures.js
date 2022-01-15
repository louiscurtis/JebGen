function setCreatureContent() {
  const starts = [
    "Booty",
    "Cankerous",
    "Grand",
    "Plated",
    "Scrunchy",
    "Slimy",
    "Spiny",
  ];

  const mids = [
    "Donkey",
    "Flat-Headed",
    "Greased",
    "Green",
    "Immortal",
    "Wispy",
    "Zonked",
  ];

  const ends = [
    "Antelope",
    "Beetle",
    "Centipede",
    "Gazer",
    "Hound",
    "Log",
    "Tube-ram",
    "Turtle",
    "Vultschpeckler",
    "Warblebeast",
    "Were-Rat",
  ];

  const randFirst = Math.floor(Math.random() * starts.length);
  const randMid = Math.floor(Math.random() * mids.length);
  const randSecond = Math.floor(Math.random() * ends.length);

  let newPhrase = toCasing(starts[randFirst]);

  newPhrase = newPhrase + " " + toCasing(mids[randMid]);

  const phraseEnd = toCasing(ends[randSecond]);

  newPhrase = newPhrase + " " + phraseEnd;

  document.getElementById("creature").innerHTML = newPhrase;
}
