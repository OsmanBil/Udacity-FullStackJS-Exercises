import express from 'express';
import routes from './routes/index';
import csv from 'csvtojson';
import { promises as fsPromises } from 'fs';

const app = express();
const port = 3000;

const inputFile = './users.csv';
const outputFile = 'users.json';

app.get('/convert', (req, res) => {
    res.send('Converting in process!');
    csv()
        .fromFile(inputFile)
        .then((data) => {
            let newData = data.map((item) => {
                let first = item.first_name;
                let last = item.last_name;
                let phone = item.phone;
                if (item.phone === '') {
                    phone = 'missing data';
                }
                return { first, last, phone };
            });
            fsPromises.writeFile(outputFile, JSON.stringify(newData));
        })
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
});
