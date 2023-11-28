import { $host } from "./index";

export const getDevises = async () => {
    const response = await $host.get("/getDevises");
    return response.data;
}

export const changeState = async (data) => {
    const response = await $host.post("/changeState", {"body": data});
    console.log(response);
    return response.data;
}