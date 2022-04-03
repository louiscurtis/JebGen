function setInventionContent() {
  const starts = [
    "adaptive",
    "alternative",
    "anxilliary",
    "artificial",
    "atomic",
    "Automated",
    "auxiliary",
    "ballistic",
    "binary",
    "calorific",
    "carpian",
    "centric",
    "chilled",
    "compressed",
    "connotative",
    "corporeal",
    "cyber",
    "cybernetic",
    "cyntherian",
    "dimensional",
    "directional",
    "directed",
    "dynamic",
    "encrypted",
    "entropic",
    "flaming",
    "frozen",
    "fusion",
    "improved",
    "genic",
    "gildoic",
    "gravific",
    "gravitational",
    "heated",
    "high-speed",
    "holographic",
    "hyper",
    "interstellar",
    "ionized",
    "linear",
    "localized",
    "long-range",
    "low-speed",
    "magnetic",
    "mechanical",
    "microscopic",
    "modular",
    "molecular",
    "moncturian",
    "navigational",
    "oblative",
    "ogdenized",
    "orgone",
    "ossiphazolated",
    "parabolic",
    "parallel",
    "phased",
    "phasic",
    "plutonating",
    "plutonated",
    "poly-dynamic",
    "pournifying",
    "praxis",
    "quantic",
    "quantum",
    "quick",
    "replicative",
    "resistant",
    "resonating",
    "short-range",
    "spatial",
    "spinoidal",
    "static",
    "stellar",
    "superior",
    "telemetric",
    "temporal",
    "throbbing",
    "tricornial",
    "trigloidal",
    "undulating",
    "unstable",
    "valved",
    "vaporized",
    "versatile",
    "vibratile",
    "vibrating",
    "vorpal",
    "wangsational",
    
  ];

  const mids = [
    "Albionian",
    "button trigger",
    "coin-fed",
    "coin-operated",
    "chunky",
    "cushioned",
    "dino",
    "dust-powered",
    "electric",
    "floor mounted",
    "flying",
    "giga",
    "grand",
    "hamster wheel powered",
    "hand cranked",
    "hand powered",
    "High Albion",
    "internal",
    "jolly",
    "knobbed",
    "lever action",
    "mega",
    "master",
    "multi barreled",
    "multi layer",
    "multi level",
    "multi pronged",
    "nano",
    "oiled",
    "orphan tear-powered",
    "padded",
    "pet",
    "plebeian",
    "pumping",
    "pump-fed",
    "purring",
    "redundant",
    "rump-fed",
    "self cleaning",
    "sky",
    "solar",
    "solar powered",
    "spinning",
    "super",
    "sweat fueled",
    "tear fueled",
    "top-notch",
    "top-shelf",
    "ultra",
    "wall mounted",
    "water",
    "waxed",
    "whirling",
  ];

  const ends = [
    "acidifier",
    "aero-beacon",
    "angrynator",
    "armour",
    "bacon",
    "beacon",
    "ball buster",
    "baster",
    "blaster",
    "blood pump",
    "broom",
    "butt trumpet",
    "clipper",
    "coat",
    "coat hanger",
    "cork plugger",
    "couch",
    "crotchetizer",
    "crotch-striker",
    "cruncher",
    "crunchetizer",
    "defibrillator",
    "depasturizer",
    "dewaxer",
    "door-Knocker",
    "dunker",
    "dynamo",
    "emitter",
    "entropedizer",
    "feather-duster",
    "fibrillator",
    "furbisher",
    "freezer",
    "frill tape",
    "garfunkler",
    "glistenator",
    "gonad-striker",
    "gun",
    "hair clipper",
    "hypnotizer",
    "jacket",
    "jimmy-Rustler",
    "lever",
    "masticator",
    "meat beater",
    "mercurializer",
    "mill",
    "moustache cleaner",
    "moustache paste",
    "moustache waxer",
    "moustachenator",
    "nose trumpet",
    "nostril cleaner",
    "nullifier",
    "paddle",
    "paddler",
    "pan",
    "pasturizer",
    "pistol",
    "plate",
    "poisonator",
    "pot",
    "pulverizer",
    "puncher",
    "refurbisher",
    "rifle",
    "rower",
    "sneeze silencer",
    "spontaneator",
    "stick",
    "stuffer",
    "turkey-baster",
    "turkey-puncher",
    "turkey-stuffer",
    "tweezer",
    "waxer",
    "wig",
    "windmill",
    "wobbler",
   
  ];

  const randFirst = Math.floor(Math.random() * starts.length);

  const randMid = Math.floor(Math.random() * mids.length);

  const randSecond = Math.floor(Math.random() * ends.length);

  let newPhrase = toCasing(starts[randFirst]);

  newPhrase = newPhrase + " " + toCasing(mids[randMid]);

  const phraseEnd = toCasing(ends[randSecond]);

  newPhrase = newPhrase + " " + phraseEnd;

  const inventionDiv = document.getElementById("invention");
  inventionDiv.innerHTML = newPhrase;
}
