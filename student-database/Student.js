export class Student {
    constructor(name, classes) {
        this.name = name;
        this.classes = classes;
    }

    generateGpa() {
        let total = 0;
        for (const clazz of this.classes) {
            total += clazz.getClassGpa();
        }

        const average = total / this.classes.length;

        console.log(`${this.name} GPA: ${average}`);
    }

    generateReportCard() {
        console.log(`Report Card for: ${this.name}`);
        console.log('-------------');
        for (const clazz of this.classes) {
            console.log(`${clazz.subject} ${clazz.letterGrade()}`);
        }
        console.log('--------------');
    }
}