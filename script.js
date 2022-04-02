const btnGuess = document.getElementsByClassName("btn-guess")[0];
const btnAgain = document.getElementsByClassName("btn-play-again")[0];
const outputMessage = document.getElementById("message");
const allContent = document.getElementsByClassName("conten")[0];
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const inputText = document.getElementById("input-number");

const randomNumber = Math.floor(Math.random() * 15) + 1;

var messageText = "";
console.log(randomNumber);

btnGuess.onclick = function () {
  try {
    var guessNumber = inputText.value;
    if (!guessNumber) return;

    if (isNaN(guessNumber)) {
      outputMessage.innerText = "Potrebno je uneti ceo broj.";
    } else {
      if (guessNumber == randomNumber) {
        outputMessage.innerText = "Cestitamo pogodili ste broj.";
        allContent.style.display = "none";
        return;
      }
      outputMessage.innerText = "Niste pogodili broj.";
    }
  } catch (error) {
    modal.style.display = "block";
  }
};

btnAgain.onclick = function () {
    window.location.reload();
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
