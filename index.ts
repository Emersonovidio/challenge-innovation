import express from 'express';

const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.get('/', (_req, res) => {
    res.status(200).send('Welcome to Game Store');
});



const port = 8000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
