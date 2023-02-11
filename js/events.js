console.log("Ajker Events E Khela Hobbe");

// Option 1: Directly set on the HTML element

// Option 2: Add onclick function

function makeRed() {
  document.body.style.backgroundColor = "red";
}

// Option 3: Add getElementById

const makeBlueButton = document.getElementById("blue-btn");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
// Option 3: Another way

const purpleButton = document.getElementById("purple-btn");
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// option 4:  (most of the time we use this)
//System one
const greenButton = document.getElementById("green-btn");
greenButton.addEventListener("click", makeGreen);

function makeGreen() {
  document.body.style.backgroundColor = "green";
}

//System two
const whiteButton = document.getElementById("white-btn");
whiteButton.addEventListener("click", function makeWhiteButton() {
  document.body.style.backgroundColor = "white";
});

//System three [FINAL]
document.getElementById("orange-btn").addEventListener("click", function () {
  document.body.style.backgroundColor = "orange";
});
