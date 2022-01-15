function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

async function getRandFromWeb({ noun, adjective, animal, letter, count } = {}) {
  let path = "/noun";
  if (noun) {
    // noun by default
  } else if (adjective) {
    path = "/adjective";
  } else if (animal) {
    path = "/animal";
  }

  const letterPath = letter ? "/" + letter : "";

  const countPath = count ? "?count=" + count : "";

  const response = await fetch(
    "https://random-word-form.herokuapp.com/random" +
      path +
      letterPath +
      countPath,
    {
      method: "GET",
    }
  );

  // Alternative api
  // const response = await fetch("https://random-words-api.vercel.app/word", {
  //   method: "GET",
  // });

  if (response.ok) {
    const boday = await response.json();

    if (boday && boday.length > 0) {
      const uniqueBoday = boday.filter(onlyUnique);

      console.log(uniqueBoday);
      return uniqueBoday;
    }
  } else {
    console.log(response);
  }
}
