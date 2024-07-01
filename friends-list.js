// Project-3 Friends List

// joe 28 542-523-4524
// henry 32 323-645-1902
// josh 25 123-123-1234

// Approach -1

let myFriendList = new Map();

function createFriend(name, age, phoneNumber){
    const friend = {
        name, // similar to name: name
        age,
        phoneNumber,
        displayInfo: function(){
            for (const key in this) {
                if(key !== 'displayInfo'){
                    console.log(key + ":", friend[key]); // prints as => age: 28
                }
                
            }
        }
    }

    myFriendList.set(name, friend);
}

function getFriend(name){
    const friend = myFriendList.get(name);

    console.log("Info for: " + name);

    friend.displayInfo();
    
}

const config = {
    input: process.stdin,
    output: process.stdout
}

const readline = require("readline").createInterface(config);

function promptUser(){
    readline.question("Enter a friend: ", (userInput) => {
        if(userInput === 'exit'){
            readline.close();
            return;
        }
        // joe 28 123-123-1234
        const inputArray = userInput.split(" ");
        const name = inputArray[0];
        const age = Number(inputArray[1]);
        const phoneNumber = inputArray[2];
        if(inputArray.length === 1){
            getFriend(name);
        } else if (name && !isNaN(age) && phoneNumber)
        
        {
            createFriend(name, age, phoneNumber);
                
        }else{
            console.log("invalid data");
        }
        
        
        promptUser();
    });
}

promptUser();


// createFriend("Joe", 28, "123-123-1234");
// createFriend("Josh", 42, "123-123-1234");

// console.log(myFriendList);
// getFriend("Josh")

// Approach -2

// const config = {
//     input: process.stdin,
//     output: process.stdout
// }

// const readline = require('readline').createInterface(config);

// let myFriendsList = new Map();

// function retrieveFriendInfo(name){
//     console.log("info for friend: " + name);
//     if (myFriendsList.has(name)){
//         console.log(`name: ${name}`);
//         console.log(`age: ${myFriendsList.get(name)[0]}`);
//         console.log(`phoneNumber: ${myFriendsList.get(name)[1]}`);
//     } else{
//         console.log('contact not found for: ' + name);
//     }
// }

// function promptUser(){
//     readline.question("Enter a friend: ", (userInput) => {
//         if(userInput === "exit"){
//             readline.close();
//         } else {
//             let userInputInArray = userInput.trim().split(' ');
//             if (userInputInArray.length === 1){
//                 retrieveFriendInfo(userInputInArray[0]);
//                 promptUser();
//             }else {
//                 myFriendsList.set(userInputInArray[0], userInputInArray.splice(1,2));
//                 // console.log(myFriendsList);
//                 promptUser();
//             }
//         }
//     })
// }

// promptUser();
