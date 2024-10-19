var playerOne = prompt("Heads or Tails");
playerOne = playerOne.toLowerCase();
var playerTwo;
var currentPlayer = "";

// console.log(playerOne);

while (true) {
    if (playerOne === "heads") {
        playerTwo = "tails";
        currentPlayer = "Jack";
        break;
    } else if (playerOne === "tails") {
        playerTwo = "Oggy";
        currentPlayer = "Oggy";
        break;
    } else {
        alert("Invalid Input. Choose Heads or Tails");
        playerOne = prompt("Heads or Tails").toLowerCase();
    }
}

function rollDice() {
    var diceOne = Math.floor(Math.random() * 6) + 1;
    var diceTwo = Math.floor(Math.random() * 6) + 1;
    return { diceOne: diceOne, diceTwo: diceTwo };
}

var rollButton = document.getElementById("tapButton");
var num1Element = document.getElementsByClassName("num")[0];
var num2Element = document.getElementsByClassName("num")[1];


function diceRoll() {
    var result = rollDice();
    var diceOne = result.diceOne;
    var diceTwo = result.diceTwo;

    num1Element.innerHTML = diceOne;
    num2Element.innerHTML = diceTwo;

    if (diceOne === 6 && diceTwo === 6) {
        alert(currentPlayer + " wins the game!");
        if (currentPlayer === "Jack") {
            currentPlayer = "Oggy";
        } else {
            currentPlayer = "Jack";
        }
     }
};