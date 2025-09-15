import { Router } from 'express';
import { StudentController } from '../controllers/studentController';

const router = Router();
const studentController = new StudentController();

export function setStudentRoutes(app) {
    app.use('/students', router);
    
    router.post('/', studentController.addStudent.bind(studentController));
    router.get('/:id', studentController.getStudent.bind(studentController));
    router.put('/:id', studentController.updateStudent.bind(studentController));
    router.delete('/:id', studentController.deleteStudent.bind(studentController));
}