const net = new brain.NeuralNetwork();
const data = window.data;
const guessTag = document.getElementById("guess");
const colorBox = document.getElementById("color");
const testButton = document.getElementById("run-test");

net.train(data, {
  iterations: 20000,
  log: false,
});

function setRandomColor() {
  return {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  };
}

function guessColor() {
  let colorGuess;
  const color = setRandomColor();
  const guess = net.run(color)[0];

  if (guess < 0.0715) {
    colorGuess = "blue";
  } else if (guess >= 0.0715 && guess < 0.215) {
    colorGuess = "green";
  } else if (guess >= 0.215 && guess < 0.358) {
    colorGuess = "red";
  } else if (guess >= 0.358 && guess < 0.501) {
    colorGuess = "orange";
  } else if (guess >= 0.501 && guess < 0.644) {
    colorGuess = "pink";
  } else if (guess >= 0.644 && guess < 0.787) {
    colorGuess = "purple";
  } else if (guess >= 0.787 && guess < 0.929) {
    colorGuess = "yellow";
  } else if (guess >= 0.929 && guess <= 1) {
    colorGuess = "brown";
  }
  colorBox.style.backgroundColor = `rgba(${color.r * 255}, ${color.g * 255}, ${
    color.b * 255
  })`;

  guessTag.innerText = colorGuess;
}

guessColor();

testButton.addEventListener("click", () => {
  guessColor();
});
