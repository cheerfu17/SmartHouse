import axios from "axios";
import { IP } from "./global_ip.js";

const $host = axios.create({
    baseURL: IP
});

export {
    $host
}
