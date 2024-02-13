const game = {
  team1: "REAL MADRID",
  team2: "BARCELONA",
  players: [
    [
      "Courtois",
      "Vazquez",
      "Militao",
      "Nacho",
      "Mendy",
      "Casemiro",
      "Valverde",
      "Modrich",
      "Kroos",
      "Vinicius",
      "Benzema",
    ],
    [
      "Stegen",
      "Mingueza",
      "Araujo",
      "Lenglet",
      "Dest",
      "Busquets",
      "Jong",
      "Alba",
      "Messi",
      "Pedri",
      "Dembele",
    ],
  ],
  score: "2:1",
  scored: ["Kroos", "Benzema", "Mingueza"],
  date: "Apr 10th, 2021",
  odds: {
    team1: 1.48,
    draw: 2.53,
    team2: 4.25,
  },
};

game.scored.forEach((el, index) => console.log(`Goal ${index + 1} - ${el}`));

const calculateAverage = () => {
  console.log(
    (Object.values(game.odds).reduce((acc, el) => acc + el, 0) / 3).toFixed(2)
  );
};
calculateAverage();

const printOdds = () => {
  Object.entries(game.odds).forEach((el) =>
    console.log(
      `Rate for ${el[0] == "draw" ? el[0] : `${game[el[0]]} victory`}: ${el[1]}`
    )
  );
};

printOdds();

const goalScorers = {};

const addScore = (scored) => {
  for (let i = 0; i < scored.length; i++) {
    if (scored[i] in goalScorers) {
      goalScorers[scored[i]] = goalScorers[scored[i]] + 1;
    } else {
      goalScorers[scored[i]] = 1;
    }
  }
};
addScore(game.scored);
console.log(goalScorers);
