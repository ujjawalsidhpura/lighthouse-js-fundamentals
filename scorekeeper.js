
let resetButton = document.querySelector('#reset')
let winningScoreSelect = document.querySelector('#playto')

let p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display')
}
let p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display')
}

let winningScore = 0;
let isGameOver = false;

function scoreKeeper(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add('has-text-success')
      opponent.display.classList.add('has-text-danger')
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.innerHTML = player.score;
  }
}


p1.button.addEventListener('click', function () {
  scoreKeeper(p1, p2);
})

p2.button.addEventListener('click', function () {
  scoreKeeper(p2, p1);
});

winningScoreSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener('click', reset)

function reset() {
  isGameOver = false;
  p1.score = 0;
  p2.score = 0;
  p1.display.innerHTML = 0;
  p2.display.innerHTML = 0;
  p1.display.classList.remove('has-text-success', 'has-text-danger')
  p2.display.classList.remove('has-text-success', 'has-text-danger')
  p1.button.disabled = false;
  p2.button.disabled = false;
}