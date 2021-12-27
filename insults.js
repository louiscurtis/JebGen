function setInsultContent() {
  const starts = [
    "Crimple",
    "Cropple",
    "Crotchety",
    "Dodgy",
    "Farty",
    "Fiddle",
    "Gobble",
    "Golly",
    "Goose",
    "Loathed",
    "Prattling",
    "Rustled",
    "Sanctimonious",
  ];

  const mids = [
    "Base-court",
    "Cankle-loving",
    "Hell-hated",
    "Reeling-ripe",
    "Rump-fed",
  ];

  const ends = [
    "Arse",
    "Beaver",
    "Bellend",
    "Berk",
    "Berries",
    "Bint",
    "Blighter",
    "Blighter",
    "Bloodclaat",
    "Bonk",
    "Bounder",
    "Bugger",
    "Chunder",
    "Clunge",
    "Dredgie",
    "Cow",
    "Fanny",
    "Feck",
    "Flaps",
    "Gash",
    "Git",
    "Hocus pocus",
    "Jimmies",
    "Knob",
    "knobend",
    "Knocker",
    "Minge",
    "Minger",
    "Munter",
    "Nonce",
    "Pots",
    "Prick",
    "Prickteaser",
    "Puff",
    "Punani",
    "Shag",
    "Slag",
    "Slapper",
    "Sticks",
    "Tart",
    "Wanker",
    "Wobblers",
  ];

  const hasMid = Math.floor(Math.random() * 2);

  const randFirst = Math.floor(Math.random() * starts.length);

  const randMid = Math.floor(Math.random() * mids.length);

  const randSecond = Math.floor(Math.random() * ends.length);

  let newPhrase = starts[randFirst];

  if (hasMid === 0) {
    newPhrase = newPhrase + " " + mids[randMid];
  }

  newPhrase = newPhrase + " " + ends[randSecond];

  const insultDiv = document.getElementById("insult");
  insultDiv.innerHTML = newPhrase;
}
