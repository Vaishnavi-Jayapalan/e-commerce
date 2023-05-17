import express from 'express'
import { mysqlClient } from './database.mjs';
import router from './src/routes/index.mjs';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors())
app.use(express.json());
app.use(router)

app.listen(port, () => console.log(`Listening on port ${port}`));

mysqlClient();