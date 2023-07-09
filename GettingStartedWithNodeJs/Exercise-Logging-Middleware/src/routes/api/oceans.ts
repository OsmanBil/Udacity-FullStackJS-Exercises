import express from 'express';
const oceans = express.Router();

oceans.get('/', (req, res) => {
    res.send('oceans routes');
});


export default oceans;