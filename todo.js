let todoList = [];

function addTaskToTodoList(desc){
    let task = {
        description: desc,
        completed: false,
    }

    todoList.push(task);
}

function setTaskCompleted(taskIndex){
    if (taskIndex >=0 && taskIndex < todoList.length){
        todoList[taskIndex].completed = true;
    }
}

function displayTodoList(){
    for (let i = 0; i < todoList.length; i++){
        const task = todoList[i]

        if(task.completed){
            console.log(task.description + " is completed");
        }else {
            console.log(task.description + " is not completed");
        }
    }
}

// create an object containing description of the task and completion flag


// addTaskToTodoList('Walk my dog');
// addTaskToTodoList('Clean my room');
// addTaskToTodoList('do the dishes');

// setTaskCompleted(0);

// displayTodoList();

const config = {
    input: process.stdin,
    output: process.stdout
}

const readline = require('readline').createInterface(config);

function promptuserToCompleteTask(){
    displayTodoList();
    readline.question("Enter the task index to mark it completed: ", (userInput) => {
        if (userInput === "exit"){
            readline.close();
        } else {
            setTaskCompleted(userInput);
            promptuserToCompleteTask();
        }
    })
}

function promptUser(){
    readline.question("Enter the task:", (userInput) => {
        if(userInput === "exit"){
            readline.close();
        } else if (userInput === "completed"){
            promptuserToCompleteTask();
        } 
        else {
            addTaskToTodoList(userInput);
            promptUser();
        }
    });
}

promptUser();
