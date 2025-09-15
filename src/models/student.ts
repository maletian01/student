export class Student {
    id: number;
    name: string;
    age: number;
    grade: string;

    constructor(id: number, name: string, age: number, grade: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    validate(): boolean {
        if (this.age < 0) {
            throw new Error("Age must be a positive number.");
        }
        if (!this.name || this.name.trim() === "") {
            throw new Error("Name cannot be empty.");
        }
        if (!this.grade || this.grade.trim() === "") {
            throw new Error("Grade cannot be empty.");
        }
        return true;
    }
}