function setPersonContent() {
  const starts = [
    "Ali",
    "Golb",
    "Joe",
    "Moe",
    "Moody",
    "Muhammed",
    "Tadira",
    "Wandangerous",
    "Winstead",
    "Wonky",
    "Wumbo",
    "Yankbee",
  ];

  const mids = ["Von", "Der", "Smittle", "Jacob", "Greeble"];

  const ends = [
    "Moody",
    "Jacobson",
    "Marvin",
    "Lee",
    "Sordoba",
    "Tanker",
    "Fincher",
  ];

  // frenchy

  const startsFr = [
    "Jean",
    "Pierre",
    "Francin",
    "Galdomet",
    "Guillaume",
    "Jeremie",
  ];

  const midsFr = ["Jean"];

  const endsFr = ["Jean", "Baptiste"];

  const isFrench = document.getElementById("french-person").checked;

  if (isFrench) {
    const hasMid = Math.floor(Math.random() * 2);
    const randFirst = Math.floor(Math.random() * startsFr.length);
    const randMid = Math.floor(Math.random() * midsFr.length);
    const randSecond = Math.floor(Math.random() * endsFr.length);

    let newPhrase = startsFr[randFirst];

    if (hasMid === 0) {
      newPhrase = newPhrase + " " + midsFr[randMid];
    }

    const phraseEnd = endsFr[randSecond];

    newPhrase = newPhrase + " " + phraseEnd;

    const personDiv = document.getElementById("person");
    personDiv.innerHTML = newPhrase;
  } else {
    const hasMid = Math.floor(Math.random() * 2);
    const randFirst = Math.floor(Math.random() * starts.length);
    const randMid = Math.floor(Math.random() * mids.length);
    const randSecond = Math.floor(Math.random() * ends.length);

    let newPhrase = starts[randFirst];

    if (hasMid === 0) {
      newPhrase = newPhrase + " " + mids[randMid];
    }

    const phraseEnd = ends[randSecond];

    newPhrase = newPhrase + " " + phraseEnd;

    const personDiv = document.getElementById("person");
    personDiv.innerHTML = newPhrase;
  }
}
