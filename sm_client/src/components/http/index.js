import axios from "axios";
import { URL } from "./url_conf";

const $host = axios.create({
    baseURL: "http://127.0.0.1:5050/"
});

export {
    $host
}
