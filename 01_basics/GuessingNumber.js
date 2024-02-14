const gameNumber=25;
let userNumber=prompt("Enter the number");
while (userNumber != gameNumber) {
    userNumber=prompt("you entered the wrong number. guess again!");
}

console.log("You entered the correct number ");