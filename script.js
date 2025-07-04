let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
const guessInput = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");

checkBtn.addEventListener("click", function () {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 20) {
    messageEl.textContent = "⛔ Enter a valid number!";
  } else if (guess === secretNumber) {
    messageEl.textContent = "🎉 Correct Number!";
    document.body.style.backgroundColor = "#0f0";

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  } else {
    if (score > 1) {
      messageEl.textContent = guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = "💥 You lost the game!";
      scoreEl.textContent = 0;
    }
  }
});
