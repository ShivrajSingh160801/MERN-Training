import express from 'express';
import route from './src/routers/index'

const app = express();

app.use(route);

const port = process.env.PORT || 3000;
app.listen(port , () => {
    console.log(`connection is live at ${port}`);
})









// require("../db/conn");

// const app = express();



// app.get("/", async(req,res) => {
//     res.send("hellllllllllllllllo");
// })








