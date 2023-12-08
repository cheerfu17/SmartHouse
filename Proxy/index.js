import proxy from 'express-http-proxy';
import express from 'express';
import { URL } from './url_conf.js';


const PORT = 5050;

const app = express();
app.use("/", proxy(URL));


function start(){
    app.listen(PORT, () => console.log(`The proxy server is listening on port ${PORT}"`));
}

start();

