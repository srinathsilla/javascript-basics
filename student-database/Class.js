export class Class {
    constructor(subject, gradePercentage) {
        this.subject = subject;
        this.gradePercentage = gradePercentage;

        if (this.gradePercentage > 100) {
            this.gradePercentage = 100;
        } else if (this.gradePercentage < 0) {
            this.gradePercentage = 0;
        }
    }

    getClassGpa() {
        const gpas = {
            'A': 4.0,
            'A-': 3.7,
            'B+': 3.3,
            'B': 3.0,
            'B-': 2.7,
            'C+': 2.3,
            'C': 2.0,
            'C-': 1.7,
            'D+': 1.3,
            'D': 1.0,
            'D-': 0.7,
            'F': 0
        }

        const key = this.letterGrade();

        return gpas[key];
    }

    letterGrade() {
        let letterGrade = 'F';
        if (this.gradePercentage >= 90) {
            letterGrade = 'A';
        } else if (this.gradePercentage >= 80) {
            letterGrade = 'B';
        } else if (this.gradePercentage >= 70) {
            letterGrade = 'C';
        } else if (this.gradePercentage >= 60) {
            letterGrade = 'D';
        }

        let modifier = '' //+, -

        if (letterGrade !== 'F' && letterGrade !== 'A') {
            if (this.gradePercentage % 10 >= 7) {
                modifier = '+';
            } else if (this.gradePercentage % 10 <= 3) {
                modifier = '-';
            }
        }

        if (letterGrade === 'A') {
            if (this.gradePercentage < 93) {
                modifier = '-';
            }
        }

        return letterGrade + modifier;
    }

}