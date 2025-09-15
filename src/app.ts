import express from 'express';
import bodyParser from 'body-parser';
import { setStudentRoutes } from './routes/studentRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

setStudentRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});