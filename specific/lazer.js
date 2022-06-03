function setLazerContent() {
  const starts = [
    "beloathed",
    "accursed",
    "addled",
    "babrary",
    "barnacle covered",
    "barnacle encrusted",
    "bilge drinkin'",
    "biscuit eatin'",
    "bottom-corked",
    "briny",
    "canvas shy",
    "careening",
    "clinker built",
    "cowardly",
    "crusty",
    "dull",
    "dobloonless",
    "droolin'",
    "dry-footed",
    "encrusted",
    "feculent",
    "filthy",
    "fish feedin'",
    "five-pound",
    "gout-toed",
    "grog blossomed ",
    "hornswaggled",
    "hornswaggling",
    "hull lickin'",
    "jackless",
    "lead swingin'",
    "leaky",
    "left legged",
    "lily-livered",
    "long clothed",
    "loose stayed",
    "low drafted",
    "mastless",
    "one-eyed",
    "parrot-bitten",
    "rickety",
    "rig runnin'",
    "rigless",
    "red handed",
    "rotten",
    "rusty",
    "salty",
    "sandy-cheeked",
    "scabby",
    "scurvy-ridden",
    "ship-scuttlin'",
    "shipless",
    "short-sailed",
    "short-masted",
    "skeevy",
    "snivery",
    "snied",
    "soaking",
    "soggy",
    "squawking",
    "stinkin'",
    "swaddled",
    "swaddlin'",
    "thatchless",
    "thin hulled",
    "thrice-cursed",
    "tithering",
    "toothless",
    "two-hooked",
    "yellow bellied",
    "waddlin'",
    "wet",

  ];

  const ends = [
    "Arse",
    "Abcess",
    "Barnacle",
    "barrel scraper",
    "Bilge rat",
    "clod",
    "copper catcher",
    "cork soaker",
    "curr",
    "dredgie",
    "dry-foot",
    "dungbie",
    "flogger",
    "jack tar",
    "keister",
    "knave",
    "killick",
    "Lagan",
    "Landlubber",
    "leecher",
    "loose seacock",
    "lubber",
    "galley slave",
    "maroon",
    "mipper",
    "mongrel",
    "navy lover",
    "pearl less clam",
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
    "son of a biscuit-eater",
    "squiffy",
    "strumpet",
    "strumpeteer",
    "swab",
    "tar",
    "tither",
    "trundler",
    "toothless shark",
    
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
