const totalMatches = document.querySelector('#totalMatches');
const resetButton = document.querySelector('#resetButton');

let isGameOver = false;
let winningScore = 3;

const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#scoreP1')
}
const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#scoreP2')
}
totalMatches.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  winningScore = Math.ceil(winningScore / 2);
  reset();
})
function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score++;
    if (player.score === winningScore) {
      isGameOver = true;
      opponent.button.disabled = true;
      player.button.disabled = true;
      player.display.classList.add('text-success');
      opponent.display.classList.add('text-danger');
    }
  }
  player.display.textContent = player.score;
}
p1.button.addEventListener('click', function () {
  updateScore(p1, p2);
})
p2.button.addEventListener('click', function () {
  updateScore(p2, p1);
})
function reset() {
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.button.disabled = false;
    p.display.classList.remove('text-danger', 'text-success');
  }
  isGameOver = false;
}
resetButton.addEventListener('click', function () {
  reset();
})






