import deviceService from "./Devices/service.js"

class deviceController{
    async getDevices(req, res){
        try {
            //Здесь должен быть вызов функции для поиска устройств
            return res.json(); //Отправка списка устройств на клиент
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }

    async changeState(req, res){
        try {
            //Здесь должен быть вызов функции изменения состояния устройства
            return res.json(); //Возвращение результата операции на клиент
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }
}

export default new deviceController;