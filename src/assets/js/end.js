const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const endScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 5;        // max amount of scores

endScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
  console.log("clicked the save button!");
  e.preventDefault();

  const score = {
    score: Math.floor(Math.random() * 100),
    name: username.value
  };

  highScores.push(score);
    
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("index.html");
};

// Pass || Fail
let finalResult =(mostRecentScore<=20)?"FAIL":"PASS";
document.getElementById('passFail').innerHTML = finalResult;

// BG Color change based on Pass or Fail
 if (finalResult == "PASS"){
  document.querySelector('#end')
  .style.backgroundColor = 'rgb(146, 208, 146)';
 } else {
  document.querySelector('#end')
  .style.backgroundColor = 'rgb(218, 137, 137)';
 }

// testing
console.log(endScore);
console.log(mostRecentScore);
console.log(finalResult);
console.log(saveHighScore.score);

// **** TO DO: If Fail then motivational quote ****
