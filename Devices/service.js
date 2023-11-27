import readJSONValue from "../Tools/readJSON.js";
import sendSocketMessage from "../Tools/sendSocketMessage.js";

class deviceService{
    async getDevices(){
        //Написать логику для поиска устройств в локальной сети
    }
    
    async changeState(message){
        const ip = readJSONValue("deviceConfig.json", "IP");
        const resp_from_server = await sendSocketMessage(ip, "80", message);
        
        return resp_from_server;
    }
}

export default new deviceService;