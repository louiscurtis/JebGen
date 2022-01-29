function setLazerContent() {
  const starts = [
    "Beloathed",
    "Blasted",
    "Bloody",
    "Confounded",
    "Crimple",
    "Cropple",
    "Crotchety",
    "Dodgy",
    "Double",
    "Farty",
    "Fiddle",
    "Gobble",
    "Golly",
    "Goose",
    "Loathable",
    "Loathed",
    "Plenty",
    "Prattling",
    "Rustled",
    "Sanctimonious",
    "Triple",
    "Backmunching",
    "Base-court",
    "Cankle-loving",
    "Clotted",
    "Clot-sucking",
    "Clot-headed",
    "Doll-dragging",
    "Hell-hated",
    "Ill-Willed",
    "Last-picked",
    "Peckless",
    "Penny-eating",
    "Reeling-ripe",
    "Rump-fed",
    "Sharpless",
    "Showless",
    "Sniveling",
  ];

  const ends = [
    "Arse",
    "Baboon",
    "Beaver",
    "Bellend",
    "Berk",
    "Berries",
    "Bint",
    "Biscuit-sniffer",
    "Blighter",
    "Bloodclaat",
    "Bonk",
    "Bounder",
    "Buffoon",
    "Bugger",
    "Cattywampus",
    "Chunder",
    "Clunge",
    "Draftchugger",
    "Dredgie",
    "Cow",
    "Fanny",
    "Feck",
    "Flaps",
    "Gash",
    "Git",
    "Gobwash",
    "Gully-Troll",
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
    "Simian",
    "Slag",
    "Slapper",
    "Sticks",
    "Tart",
    "Tosshole",
    "Troglodyte",
    "underhanded",
    "Wanker",
    "Witless",
    "Wobblers",
    "Worm",
  ];

  const randFirst = Math.floor(Math.random() * starts.length);

  const randMid = Math.floor(Math.random() * starts.length);

  const randSecond = Math.floor(Math.random() * ends.length);

  let newPhrase = toCasing(starts[randFirst]);

  newPhrase = newPhrase + " " + toCasing(starts[randMid]);

  newPhrase = newPhrase + " " + toCasing(ends[randSecond]);

  const lazerDiv = document.getElementById("lazer");
  lazerDiv.innerHTML = newPhrase;
}
