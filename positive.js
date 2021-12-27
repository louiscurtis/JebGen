function setPositiveContent() {
  const starts = ["You", "Hello"];

  const mids = ["Go"];

  const ends = ["Girl", "World"];

  const hasMid = Math.floor(Math.random() * 2);

  const randFirst = Math.floor(Math.random() * starts.length);

  const randMid = Math.floor(Math.random() * mids.length);

  const randSecond = Math.floor(Math.random() * ends.length);

  let newPhrase = toCasing(starts[randFirst]);

  if (hasMid === 0) {
    newPhrase = newPhrase + " " + toCasing(mids[randMid]);
  }

  newPhrase = newPhrase + " " + toCasing(ends[randSecond]);

  const positiveDiv = document.getElementById("positive");
  positiveDiv.innerHTML = newPhrase;
}
