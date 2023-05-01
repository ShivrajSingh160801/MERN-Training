import express from 'express';
import connectDB from './src/Database/conn';
import bodyParser from 'body-parser';
import customerRoute from './src/Router/customerRoute'

const app = express();

const databaseConnection = connectDB();
console.log(databaseConnection);

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/customer', customerRoute);
const port = 3000;
app.listen(port , () => {
    console.log(`connection is live at ${port}`);
})



