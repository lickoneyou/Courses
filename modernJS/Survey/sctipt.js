const survey = {
  question: "What programming language would you like to learn?",
  options: ["0: JavaScript", "1: Python", "2: Ruby", "3: Java", "4: C#"],
  answers: new Array(5).fill(0),
  logNewAnswer() {
    console.log(this);
    const pr = prompt(`${this.question}
      
${this.options.join("\n")}
(Enter option number)
      `);
    if (pr > this.options.length - 1 || pr < 0) {
      alert("Add correct answer");
      return;
    }
    if (isNaN(pr)) {
      alert("Choose a number");
      return;
    }
    this.answers[pr] = this.answers[pr] + 1;
    this.printResults("string");
  },
  printResults(type = "array") {
    if (type == "array") console.log(this.answers);
    else console.log(`Survey results: ${this.answers.join(", ")}`);
  },
};

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => survey.logNewAnswer());

const arr1 = [7, 1, 4];
const arr2 = [3, 6, 9, 2, 5, 4, 4];

survey.printResults.call({ answers: arr1 }, 'string');
survey.printResults.call({ answers: arr2 });
