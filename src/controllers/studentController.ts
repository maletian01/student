class StudentController {
    private students: any[] = [];

    addStudent(student: any) {
        this.students.push(student);
        return student;
    }

    getStudent(id: number) {
        return this.students.find(student => student.id === id);
    }

    updateStudent(id: number, updatedInfo: any) {
        const index = this.students.findIndex(student => student.id === id);
        if (index !== -1) {
            this.students[index] = { ...this.students[index], ...updatedInfo };
            return this.students[index];
        }
        return null;
    }

    deleteStudent(id: number) {
        const index = this.students.findIndex(student => student.id === id);
        if (index !== -1) {
            return this.students.splice(index, 1)[0];
        }
        return null;
    }
}

export default StudentController;