// Задание 2. "Управление списком студентов"
// Реализуйте класс Student, представляющий студента, со следующими свойствами и
// методами:
// ● Свойство name (имя) - строка, имя студента.
// ● Свойство age (возраст) - число, возраст студента.
// ● Свойство grade (класс) - строка, класс, в котором учится студент.
// ● Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// ● javascript

class Student {
    constructor(nameStudent, age, grade) {
        this.nameStudent = nameStudent;
        this.age = age;
        this.grade = grade;
    }
    displayInfo() {
        console.log(` Name: ${this.nameStudent}\n Age:${this.age}\n Grade:${this.grade}`);
    }
}

const student1 = new Student('Jane Doe', 16, '10th grade');
const student2 = new Student('John Smith', 17, '11th grade');

student1.displayInfo();
student2.displayInfo();