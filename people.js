function setPersonContent() {
  const starts = ["Joe", "Wumbo", "Moody", "Wonky"];

  const mids = ["Von", "Der", "Smittle", "Jacob"];

  const ends = ["Moody", "Jacobson", "Marvin"];

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
