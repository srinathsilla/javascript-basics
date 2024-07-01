import { Class } from './Class.js';
import { Student } from './Student.js';
import readline from 'readline';

const config = {
    input: process.stdin,
    output: process.stdout
}

const rl = readline.createInterface(config);

const studentMap = new Map();

function addStudentPrompt(){
    rl.question("Enter a student name and grades for: Math, English, Science & History: ", (userInput) => {
        const inputArr = userInput.split(" ");
        const name = inputArr[0];
        const mathGrade = inputArr[1];
        const englishGrade = inputArr[2];
        const scienceGrade = inputArr[3];
        const historyGrade = inputArr[4];

        if(inputArr.length < 5 || isNaN(mathGrade) || isNaN(englishGrade) || isNaN(scienceGrade) || isNaN(historyGrade)){
            console.log('Invalid student data entered');
            addStudentPrompt();
        }

        const classes = [
            new Class("Math", mathGrade),
            new Class("English", englishGrade),
            new Class("Science", scienceGrade),
            new Class("History", historyGrade)
        ]

        const student = new Student(name, classes);
        studentMap.set(name, student);
        console.log('Added ', name);
        promptUser();
        
    });
}

function hasStudent(studentName, callback){
    if (studentMap.has(studentName)) {
        const student = studentMap.get(studentName);
        callback(student);
    } else {
        console.log('No student found for ', studentName);
    }
    promptUser();
}

function displayStudents(){
    const names = [];
    for (const [key] of studentMap){
        names.push(key);
    }

    console.log(names.join(', '));
}

function promptUser(){
    rl.question("Enter a command (Type `cmd` to see all commands):", (userInput) => {
        const args = userInput.split(" ");
        switch(args[0]){
            case 'exit': {
                rl.close();
                return;
            }
            case 'add-student':{
                addStudentPrompt();
                break;
            }
            case 'report-card':{
                hasStudent(args[1], (student)=>{
                    student.generateReportCard();
                });
                break;
            }
            case 'gpa': {
                hasStudent(args[1], (student) => {
                    student.generateGpa();
                });
                break;
            }
            case 'students': {
                displayStudents();
                promptUser();
                break;
            }
            case 'cmd':{
                console.log("exit | exits the program");
                console.log("add-student | adds a student and grades for each subject");
                console.log("report-card <student name> | shows report card for student");
                console.log("gpa <student name> | show gpa for student");
                console.log("students | displays all students");
            }
            default: {
                console.log('Inavlid command');
                promptUser();
            }
        }
    });
}

promptUser();

// const classes = [
//     new Class("Math", 100),
//     new Class("English", 68),
//     new Class("Science", 89),
//     new Class("History", 92)
// ]

// const john = new Student("John", classes);
// john.generateReportCard();
// john.generateGpa();


// My Approach

// let studentDatabase = new Map()

// class Student{
//     constructor(name, math, english, science, history){
//         this.name = name;
//         this.math = math;
//         this.english = english;
//         this.science = science;
//         this.history = history;
//         this.mathGrade = this.getGrade(math);
//         this.englishGrade = this.getGrade(english);
//         this.scienceGrade = this.getGrade(science);
//         this.historyGrade = this.getGrade(history);
//         this.gpa = this.calculateGPA();

//     }

//     getGrade(mark) {
//         if (mark >= 97) return 'A+';    // 4.0
//         else if (mark >= 93) return 'A';    //3.75
//         else if (mark >= 90) return 'A-';   //3.5
//         else if (mark >= 87) return 'B+';   //3.25
//         else if (mark >= 83) return 'B';    //3.0
//         else if (mark >= 80) return 'B-';   //2.75
//         else if (mark >= 77) return 'C+';   //2.5
//         else if (mark >= 73) return 'C';    //2.25
//         else if (mark >= 70) return 'C-';   //2.0
//         else if (mark >= 67) return 'D+';   //1.75
//         else if (mark >= 63) return 'D';    //1.5
//         else if (mark >= 60) return 'D-';   //1.25
//         else return 'F';    //0
//     }

//     getGradePoint(mark) {
//         if (mark >= 97) return 4.0;    // 4.0
//         else if (mark >= 93) return 3.75;    //3.75
//         else if (mark >= 90) return 3.5;   //3.5
//         else if (mark >= 87) return 3.25;   //3.25
//         else if (mark >= 83) return 3.0;    //3.0
//         else if (mark >= 80) return 2.75;   //2.75
//         else if (mark >= 77) return 2.5;   //2.5
//         else if (mark >= 73) return 2.25;    //2.25
//         else if (mark >= 70) return 2.0;   //2.0
//         else if (mark >= 67) return 1.75;   //1.75
//         else if (mark >= 63) return 1.5;    //1.5
//         else if (mark >= 60) return 1.25;   //1.25
//         else return 0;    //0
//     }

//     displayReportCard(){
//         console.log("Report card for: " + this.name);
//         console.log("----------------")
//         console.log("Math " + this.mathGrade);
//         console.log("English " + this.englishGrade);
//         console.log("Science " + this.scienceGrade);
//         console.log("History " + this.historyGrade);
//         console.log("----------------")
//     }

//     calculateGPA(){
//         let sum = this.getGradePoint(this.math) + this.getGradePoint(this.english) + this.getGradePoint(this.science) + this.getGradePoint(this.history);
//         return sum / 4.0;
        
//     }

// }

// const config = {
//     input: process.stdin,
//     output: process.stdout
// }

// const readline = require('readline').createInterface(config);

// function addStudent(){
//     readline.question("Enter a student name and grade for: Math, English, Science & History: ", (userInput) => {
//         inputArray = userInput.split(' ');
//         const student = new Student(inputArray[0], Number(inputArray[1]), Number(inputArray[2]), Number(inputArray[3]), Number(inputArray[4]));
//         studentDatabase.set(student.name, student);
//         console.log(`Added ${student.name}`);
//         promptUser();
//     });
// }

// function promptUser(){
//     readline.question("Enter a command (Type `cmd` to see all commands): ", (userInput) =>  {
//         if(userInput === 'exit'){
//             readline.close();
//             return;
//         }
//         checkInput = userInput.split(' ');
//         if(checkInput.length === 1){
//             if (checkInput[0] === 'cmd' ){
//                 console.log("exit | exits the program");
//                 console.log("add-student | adds a student and grades for each subject");
//                 console.log("report-card <student name> | shows report card for student");
//                 console.log("gpa <student name> | show gpa for student");
//                 console.log("students | displays all students");
//             } else if (checkInput[0] === 'students'){
//                 console.log(Array.from(studentDatabase.keys()));

//             } else if(checkInput[0] === 'add-student'){
//                 addStudent();
//             }
//         } else if(checkInput.length === 2){
//             if (checkInput[0] === 'report-card'){
//                 studentDatabase.get(checkInput[1]).displayReportCard();

//             } else if (checkInput[0] === 'gpa'){
//                 console.log(`GPA ${checkInput[1]} ` + studentDatabase.get(checkInput[1]).gpa);
//             }
//         }

//         promptUser();
//     });
// }

// promptUser();