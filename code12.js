class Student {
    static totalStudents = 0;

    constructor(rollNo, name, marks) {
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;
        Student.totalStudents++;
    }

    displayResult() {
        console.log("Roll No:", this.rollNo);
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);

        if (this.marks >= 40) {
            console.log("Result: Passed");
        } else {
            console.log("Result: Failed");
        }

       
    }
    static displayTotalStudents() {
        console.log("Total Students:", Student.totalStudents);
    }
}



let student1 = new Student(94, "kartikey", 85);
let student2 = new Student(78, "harsh", 35);
let student3 = new Student(92, "karan", 72);



student1.displayResult();
student2.displayResult();
student3.displayResult();


Student.displayTotalStudents();