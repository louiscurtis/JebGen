const expletiveStarts = [
  "crimple",
  "cropple",
  "dodgy",
  "fiddle",
  "gobble",
  "goose",
  "golly",
  "rustled",
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

function setTextContent() {
  const insultDiv = document.getElementById("insult");

  const randomPhraseType = Math.floor(Math.random() * 2);

  if (randomPhraseType === 0) {
    const randFirst = Math.floor(Math.random() * expletiveStarts.length);

    const randSecond = Math.floor(Math.random() * expletiveEnds.length);

    insultDiv.innerHTML =
      expletiveStarts[randFirst] + " " + expletiveEnds[randSecond];
  } else if (randomPhraseType === 1) {
    const randFirst = Math.floor(Math.random() * expletiveStarts.length);

    const randSecond = Math.floor(Math.random() * expletiveStandalones.length);

    insultDiv.innerHTML =
      expletiveStarts[randFirst] + " " + expletiveStandalones[randSecond];
  }
}
