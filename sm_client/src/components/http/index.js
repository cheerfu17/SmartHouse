import axios from "axios";

const $host = axios.create({
    baseURL: "http://127.0.0.1:5050/"
});

export {
    $host
}
