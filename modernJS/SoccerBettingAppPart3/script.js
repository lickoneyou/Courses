const events = new Map([
  [19, "Goal"],
  [21, "Substitution"],
  [43, "Goal"],
  [56, "Substitution"],
  [69, "Yellow card"],
  [73, "Substitution"],
  [75, "Yellow card"],
  [79, "Substitution"],
  [81, "Red card"],
  [93, "Goal"],
]);

events.delete(75);
console.log(events);

const eventsActions = () => {
  console.log(
    `On average, an event happened every ${90 / events.size} minutes`
  );
};

eventsActions();

for (const el of events) {
  console.log(`[${el[0] < 45 ? "FIRST" : "SECOND"} HALF] ${el[0]}: ${el[1]}`);
}
