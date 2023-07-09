import express from 'express';
import logger from '../../utilities/logger';

const continents = express.Router();

continents.get('/', logger, (req, res) => {
    res.send('contintents routes');
});


export default continents;