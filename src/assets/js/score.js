const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];     
const newList = document.getElementById("highScoresList"); 

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");

  // To Do: Chart for High Score
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['Rick', 'User1', 'tom ', 'John', 'user2'],
          datasets: [{
              label: 'High Score',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [91, 88, 72, 71, 59]
          }]
      },
      options: {}
  });