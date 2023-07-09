import express from 'express';
const teachers = express.Router();

teachers.get('/', (req, res) => {
    res.send('teachers routes');
});


export default teachers;