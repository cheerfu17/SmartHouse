import "dotenv/config";
import express from "express";
import mainRouter from "./Devices/router.js";
import findIp from "./Tools/findIpByMac.js";
import readJSONValue from "./Tools/readJSON.js";
import writeJSON from "./Tools/writeJSON.js";
import create_cfg_file from "./Tools/initDeviceFile.js";

const PORT = process.env.PORT || 5050;
const app = express();
app.use(express.json());
app.use("/", mainRouter);

async function startServer(){
    try {
        //Подключение к базе данных
        await create_cfg_file();
        setTimeout(async () =>  {
            const MAC = await readJSONValue("deviceConfig.json" ,"MAC");
            console.log(MAC);
            const IP = await findIp(MAC);
            
            await writeJSON("deviceConfig.json", "IP", IP);
          }, 1000);


        app.listen(PORT, () => console.log(`The server is listening on port ${PORT}"`));
    } catch (error) {
        console.log(error);
    }
}

startServer()