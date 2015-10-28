var userChoice= prompt("Do you choose rock, paper or scissors?");
var computerChoice=Math.random();

if (0<=computerChoice<=0.33) {
    console.log("rock");
}
else {
    if (0.34<=computerChoice<=0.66) {
        console.log("paper");
    }
    else {
        console.log("scissors");
    }
}

var compare=function(choice1, choice2) {
    if (choice1===choice2) {
        return "The result is a tie!";
    }
};
