function setInsultContent() {
  const starts = [
    "Crimple",
    "Cropple",
    "Dodgy",
    "Fiddle",
    "Gobble",
    "Goose",
    "Golly",
    "Rustled",
    "Farty",
    "Loathed",
    "Sanctimonious",
    "Prattling",
    "Crotchety",
  ];

  const mids = [
    "Reeling-ripe",
    "Rump-fed",
    "Base-court",
    "Hell-hated",
    "Cankle-loving",
  ];

  const ends = [
    "Berries",
    "Blighter",
    "Bounder",
    "Jimmies",
    "Knocker",
    "Sticks",
    "Pots",
    "Puff",
    "Wobblers",
    "Arse",
    "Beaver",
    "Bellend",
    "Berk",
    "Bint",
    "Blighter",
    "Bloodclaat",
    "Bonk",
    "Bugger",
    "Chunder",
    "Clunge",
    "Cow",
    "Fanny",
    "Feck",
    "Flaps",
    "Gash",
    "Git",
    "Knob",
    "knobend",
    "Hocus pocus",
    "Minge",
    "Minger",
    "Munter",
    "Nonce",
    "Prick",
    "Prickteaser",
    "Punani",
    "Shag",
    "Slag",
    "Slapper",
    "Tart",
    "Wanker",
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
