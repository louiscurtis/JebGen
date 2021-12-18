const expletiveStarts = [
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

const expletiveMids = [
  "reeling-ripe",
  "rump-fed",
  "base-court",
  "hell-hated",
  "cankle-loving",
];

const expletiveEnds = [
  "berries",
  "blighter",
  "bounder",
  "jimmies",
  "knocker",
  "sticks",
  "pots",
  "puff",
  "wobblers",
];

const expletiveStandalones = [
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

function setInsultContent() {
  const insultDiv = document.getElementById("insult");

  const randomPhraseType = Math.floor(Math.random() * 2);

  const hasMid = Math.floor(Math.random() * 2);

  const randFirst = Math.floor(Math.random() * expletiveStarts.length);

  const randMid = Math.floor(Math.random() * expletiveMids.length);

  const randSecond =
    randomPhraseType === 0
      ? Math.floor(Math.random() * expletiveEnds.length)
      : Math.floor(Math.random() * expletiveStandalones.length);

  let newPhrase = expletiveStarts[randFirst];

  if (hasMid === 0) {
    newPhrase = newPhrase + " " + expletiveMids[randMid];
  }

  newPhrase = newPhrase + " " + expletiveStandalones[randSecond];

  insultDiv.innerHTML = newPhrase;
}
