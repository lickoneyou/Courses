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

const players1 = game.players[0];
console.log(players1);
const players2 = game.players[1];
console.log(players2);

const goalkeeper = game.players[0][0];
console.log(goalkeeper);
const fieldPlayers = [...game.players[0]].splice(1);
console.log(fieldPlayers);

const allPlayers = players1.concat(players2);
console.log(allPlayers, "allPlayers");

const players1Total = [...players1];
players1Total.push("Marcelo", "Isco", "Asensio", "Diaz", "Odriozola");
console.log(players1Total);

const team1 = game.odds.team1;
console.log(team1);
const draw = game.odds.draw;
console.log(draw);
const team2 = game.odds.team2;
console.log(team2);

const printGoals = (...arg) => {
  const players = arg.flat(Infinity);
  console.log(`${players.join(" ")} ${players.length}`);
};
printGoals("Mingueza", "Messi", "Modrich", "Nacho");

printGoals(game.scored);

switch (team1 < team2) {
  case true:
    console.log(game.team1);
    break;

  default:
    console.log(game.team2);
    break;
}
