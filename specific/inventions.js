function setInventionContent() {
  const starts = [
    "adaptive",
    "alternative",
    "artificial",
    "atomic",
    "Automated",
    "Auxiliary",
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
    "fusion",
    "improved",
    "genic",
    "gildoic",
    "gravific",
    "gravitational",
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
    "Ogdenized",
    "Poly-Dynamic",
    "Superior",
    "Tricornial",
    "Vaporized",
    "Versatile",
    "Wangsational",
    
  ];

  const mids = [
    "Chunky",
    "Electric",
    "Grand",
    "Jolly",
    "Pet",
    "pumping",
    "pump-fed",
    "Rump-fed",
    "Spinning",
  ];

  const ends = [
    "Acidifier",
    "crotchetizer",
    "Door-Knocker",
    "Jimmy-Rustler",
    "Mercurializer",
    "Poisonator",
    "Pots",
    "Spontaneator",
    "Stick",
    "Wobbler",
    "Aero-Beacon",
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
