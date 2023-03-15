import axios from "axios";
import cur_keys from "./keys.js"

axios.defaults.baseURL = cur_keys.portal_backend;
console.log("portal_backend: " + cur_keys.portal_backend)
axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers['token'] = token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)
axios.interceptors.response.use(
    config => {
        if (config.status === 200) {
            return config.data;
        }
    },
    error => {
        error.message = 'overtime'
        return Promise.reject(error)
    }
)

export const Token = cur_keys.cur_token

export default axios;
