import proxy from 'express-http-proxy';
import express from 'express';
import { URL } from './url_conf.js';
import cors from 'cors';

const PORT = 5050;

const app = express();
app.use(cors());
app.use("/", proxy(URL));


function start(){
    app.listen(PORT, () => console.log(`The proxy server is listening on port ${PORT}"`));
}

start();

