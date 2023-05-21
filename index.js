/*function comments */
function comments(results) {
  const valueResults = 17; /* value normaly equals to results */
  const comments = document.querySelector("#comments");

  if (valueResults === undefined) {
    /*dans le cas où l'utilisateur viens sur la page résults.html avant de faire un quizz*/
    comments.textContent = `Tu n'as pas encore testé tes connaissances`;
  } else if (valueResults < 10) {
    comments.textContent = `A confondu les cours de JS avec des créneaux de sieste...`;
  } else if (valueResults < 11) {
    comments.textContent = `Fait acte de présence en cours, et a une chance sur deux de répondre correctement`;
  } else if (valueResults < 17) {
    comments.textContent = `Est impliqué dans sa formation, efforts à maintenir`;
  } else {
    comments.textContent = `A tout le temps de bons résultats, est soupçonné de cheater`;
  }
}

/* how to stock good answer on local storage in case where correct answer is answer1 */
/*create 2 variables for storage */
let stockCorrectAnswer = 0;
let stockNumberOfQuestions = 0;

/* create a function for count the correct click */
function countCorrectClick(quizz) {
  const correct = document.querySelector(".answer1");
  correct.addEventListener("click", function (event) {
    stockCorrectAnswer++;
    console.log(event.target);
  });
}
/*function results */
const correctAnswer = [
  { id: "correct", title: "Correct answer", quantity: 0 },
  { id: "total", title: "Number of questions", quantity: 0 },
];
