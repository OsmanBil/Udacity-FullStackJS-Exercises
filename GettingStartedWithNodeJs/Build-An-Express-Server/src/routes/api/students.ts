import express from 'express';
const students = express.Router();

students.get('/', (req, res) => {
    res.send('student routes');
});


export default students;