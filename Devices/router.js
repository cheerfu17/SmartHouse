import { Router } from "express";
import deviceController from "../Devices/contoller.js"
const mainRouter = new Router();

mainRouter.get("/getDevises", deviceController.getDevices);
mainRouter.post("/changeState", deviceController.changeState);

export default mainRouter;
