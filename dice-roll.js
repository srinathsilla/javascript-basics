// dice roll

let userInput = process.argv[2]

let numberPicked = Number(userInput);

if(numberPicked < 1 || numberPicked > 6 || isNaN(numberPicked)){
    console.log("You entered " + userInput + ". You can only enter a number between 1 through 6");
    process.exit();
}

let numberOfRolls = 0;
let hasMatch = false;

const maxNumberOfRolls = 3;

do {
    numberOfRolls++;
    console.log("The current roll is: " + numberOfRolls);

    let diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log("The dice rolled a: " + diceRoll);

    if(diceRoll > numberPicked){
        console.log("The dice rolled is higher than the number picked!");
    }else if(diceRoll < numberPicked){
        console.log("The dice rolled is lower than the number picked!");
    }else if(diceRoll === numberPicked){
        console.log("The dice rolled the number you picked!");
        hasMatch = true;
        break;
    }

}while(numberOfRolls < maxNumberOfRolls);

if(numberOfRolls > maxNumberOfRolls && hasMatch === false){
    console.log("You've ran out of dice rolls.");
}