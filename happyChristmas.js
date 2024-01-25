const happyChristmas = () => {
  for (i = 0; i < 30; i++) {
    let oneLineString = " ";

    for (j = 0; j < 30 - i; j++) {
      oneLineString = oneLineString + " ";
    }

    for (k = 0; k < i + 1; k++) {
      oneLineString = oneLineString + "*";
    }

    for (p = 0; p < i; p++) {
      oneLineString = oneLineString + "*";
    }

    console.log(oneLineString);
    sleep(100);
    setTimeout;
  }

  for (q = 0; q < 3; q++) {
    console.log(" ");
    sleep(100);
  }

  let lastMsg = "                 ";
  console.log(lastMsg + "Stay With Me Forever Sunny ");
};

const sleep = (ms) => {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
};

happyChristmas();
