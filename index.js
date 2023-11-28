import express from "express";
import mainRouter from "./Devices/router.js";
import findIp from "./Tools/findIpByMac.js";
import readJSONValue from "./Tools/readJSON.js";
import writeJSON from "./Tools/writeJSON.js";
import create_cfg_file from "./Tools/initDeviceFile.js";
import cors from "cors"

const PORT = 5050;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", mainRouter);

async function startServer(){
    try {
        //await create_cfg_file();
        const MAC = await readJSONValue("deviceConfig.json" ,"MAC");
        const IP = await findIp(MAC);
        await writeJSON("deviceConfig.json", "IP", IP);

        app.listen(PORT, () => console.log(`The server is listening on port ${PORT}"`));
    } catch (error) {
        console.log(error);
    }
}

startServer()