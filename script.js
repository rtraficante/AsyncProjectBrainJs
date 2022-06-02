const data = [];

const colorEl = document.getElementById("color");

const blueButton = document.getElementById("blue-button");
const greenButton = document.getElementById("green-button");
const redButton = document.getElementById("red-button");
const orangeButton = document.getElementById("orange-button");
const pinkButton = document.getElementById("pink-button");
const purpleButton = document.getElementById("purple-button");
const yellowButton = document.getElementById("yellow-button");
const brownButton = document.getElementById("brown-button");
const printButton = document.getElementById("print-button");

let color;
setRandomColor();

blueButton.addEventListener("click", () => {
  chooseColor(0);
});
greenButton.addEventListener("click", () => {
  chooseColor(.143);
});
redButton.addEventListener("click", () => {
  chooseColor(.286);
});
orangeButton.addEventListener("click", () => {
  chooseColor(.429);
});
pinkButton.addEventListener("click", () => {
  chooseColor(.572);
});
purpleButton.addEventListener("click", () => {
  chooseColor(.715);
});
yellowButton.addEventListener("click", () => {
  chooseColor(.858);
});
brownButton.addEventListener("click", () => {
  chooseColor(1);
});

printButton.addEventListener("click", () => {
  print();
});

function chooseColor(value) {
  data.push({
    input: color,
    output: [value],
  });
  setRandomColor();
}

function print() {
  console.log(JSON.stringify(data));
}

function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  };

  colorEl.style.backgroundColor = `rgba(${color.r * 255}, ${color.g * 255}, ${
    color.b * 255
  })`;
}
