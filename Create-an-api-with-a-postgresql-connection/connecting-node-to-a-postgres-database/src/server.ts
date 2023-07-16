import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import mythical_weapons_routes from './handlers/mythical_weapons'

import dotenv from 'dotenv'



const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

mythical_weapons_routes(app)



app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
