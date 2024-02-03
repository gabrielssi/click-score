let score = 0;
let scoreWins = 1000;

function ExibaScore() {
  let escreva = document.querySelector('h1');
  if (score == scoreWins) {
    escreva.innerHTML = `Você ganhou!`;
  } else { escreva.innerHTML = `${score}` };
}
ExibaScore();

function ScoreScreen() {
  ExibaScore();
  score++;
}
