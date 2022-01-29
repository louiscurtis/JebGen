function setLazerContent() {
  const starts = [
    "Beloathed",
    "accursed",
    "addled",
    "babrary",
    "barnacle covered",
    "barnacle encrusted",
    "bilge drinkin'",
    "bottom-corked",
    "briny",
    "canvas shy",
    "cowardly",
    "dull",
    "dobloonless",
    "droolin'",
    "encrusted",
    "feculent",
    "filthy",
    "five-pound",
    "gout-toed",
    "grog blossomed ",
    "hornswaggled",
    "hornswaggling",
    "jackless",
    "lead swingin'",
    "left legged",
    "lily-livered",
    "long clothed",
    "loose stayed",
    "low drafted",
    "one-eyed",
    "parrot-bitten",
    "rickety",
    "rig runnin'",
    "rotten",
    "rusty",
    "salty",
    "scabby",
    "scurvy-ridden",
    "ship-scuttlin'",
    "shipless",
    "short-sailed",
    "snivery",
    "snied",
    "soggy",
    "squawking",
    "stinkin'",
    "swaddled",
    "swaddlin'",
    "thatchless",
    "thrice-cursed",
    "tithering",
    "toothless",
    "two-hooked",
    "yellow bellied",
    "waddlin'",

  ];

  const ends = [
    "Arse",
    "Abcess",
    "Barnacle",
    "Bilge rat",
    "clod",
    "Curr",
    "dredgie",
    "dry-foot",
    "Flogger",
    "jack tar",
    "knave",
    "killick",
    "Lagan",
    "Landlubber",
    "leecher",
    "lubber",
    "galley slave",
    "maroon",
    "Mipper",
    "mongrel",
    "Picaroon",
    "Pressganger",
    "Rapscallion",
    "rusty starfish",
    "scallywag",
    "scourge",
    "sea bass",
    "shark bait",
    "skeeter",
    "skink",
    "squiffy",
    "swab",
    "tar",
    "tither",
    
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
