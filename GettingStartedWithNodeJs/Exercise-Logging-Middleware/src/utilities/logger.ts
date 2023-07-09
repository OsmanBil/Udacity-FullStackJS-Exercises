import express from 'express';

const logger = (req: express.Request, res: express.Response, next: Function):
 void => {
    let url = req.url;
    console.log(`Request was made to: ${url}`);
    next(); 
}

export default logger;