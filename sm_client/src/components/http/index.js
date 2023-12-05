import axios from "axios";
import { URL } from "./url_conf";

const $host = axios.create({
    baseURL: URL
});

export {
    $host
}
