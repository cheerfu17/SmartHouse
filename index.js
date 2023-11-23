import "dotenv/config";
import express from "express";
import mainRouter from "./Devices/router.js";

const PORT = process.env.PORT || 5050;
const app = express();
app.use(express.json());
app.use("/", mainRouter);
//app.get("/", (req, res) => {res.json("Welcome page")});

function startServer(){
    try {
        //Подключение к базе данных
        //Реализовать логику поиска новых доступных устройств
        app.listen(PORT, () => console.log(`The server is listening on port ${PORT}"`));
    } catch (error) {
        console.log(error);
    }
}

startServer()