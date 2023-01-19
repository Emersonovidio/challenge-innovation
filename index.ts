import express from 'express';
import ProductRoutes from './src/routes/products.routes';
import { StatusCodes } from 'http-status-codes';

const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.get('/', (_req, res) => {
    res.status(200).send('Welcome to Bit Store');
});


const port = 8000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.use(ProductRoutes);
