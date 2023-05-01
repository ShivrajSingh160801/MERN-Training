import express from 'express';
import bodyparser  from 'body-parser';
import database from './Database/conn';
import route from './Router/orderRoute'

const app = express();

const db = database();

console.log(db)

app.use(bodyparser.json());
app.use(route)

const port = 3000;

app.listen(port , () => {
    console.log(`connection is live at ${port}`);
}); 

