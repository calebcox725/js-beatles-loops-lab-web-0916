function theBeatlesPlay(musicians, instruments) {
  var beatlesArray = [];
  for (var i = 0; i < musicians.length; i++) {
    beatlesArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatlesArray;
}

function johnLennonFacts(facts) {
  for (var i = 0; i < facts.length; i++) {
    facts[i] = facts[i] + "!!!";
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var sandwichCodeArray = [];
  do {
    sandwichCodeArray.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return sandwichCodeArray;
}